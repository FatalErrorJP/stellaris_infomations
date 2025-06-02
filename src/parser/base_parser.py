import os
import re
from typing import Any, Optional, Generic, TypeVar, Type, Union, LiteralString
from abc import ABC, abstractmethod

from src.settings import settings
from src.vo.base_vo import BaseVo

T = TypeVar('T', bound=BaseVo)


class BaseParser(ABC, Generic[T]):
    _model_class: Type[T]

    def __init__(self):
        # キーと値、またはキーとブロックの正規表現
        self.key_value_pattern = re.compile(r'^\s*(\w+)\s*=\s*(\S.*?)\s*$')
        self.key_block_start_pattern = re.compile(r'^\s*(\w+)\s*=\s*\{\s*$')
        self.block_end_pattern = re.compile(r'^\s*}\s*$')
        self.comment_pattern = re.compile(r'^\s*#.*$')
        self.at_variable_pattern = re.compile(r'^\s*@\w+\s*=\s*\S.*$')  # @で始まる変数行を無視

        # 抽象クラスとして、必要なプロパティが設定されているかチェック（厳密には実行時に）
        if not hasattr(self, '_model_class') or not self._model_class:
            raise NotImplementedError(f"Class {self.__class__.__name__} must define _model_class.")

    @abstractmethod
    def _get_simlle_list_keys(self) -> list[str]:
        # Simple string lists inside a block (e.g., building_sets = { item1 item2 })
        pass

    @abstractmethod
    def _get_prerequisites_block_keys(self) -> list[str]:
        # Keys whose content should be stored as a single raw string block (e.g., potential = { ... })
        pass

    @abstractmethod
    def _multi_raw_string_block_keys(self) -> list[str]:
        # Keys that can appear multiple times and contain structured content (e.g., triggered_planet_modifier = { ... })
        pass

    def _get_param_names(self) -> list[str]:
        return [key for key in vars(self._model_class).keys() if not key.startswith('__') and key != 'extra_properties']

    def parse_file(self, file_path: str) -> list[T]:

        """
        指定されたファイルパスの定義を解析します。
        """
        # ファイルを読み込む
        lines = self._read_file(file_path, {})

        # 解析を開始する
        datas: list[T] = []
        obj_id: Optional[str] = None
        i = 0
        while i < len(lines):
            line = lines[i].strip()

            # コメント行および、variable定義は無視する
            if not line or self.comment_pattern.match(line) or self.at_variable_pattern.match(line):
                i += 1
                continue

            # 1つ分のデータブロックの開始行
            id_match = re.match(self.key_block_start_pattern, line)
            if id_match and not obj_id:
                obj_id = id_match.group(1)
                data = {}
                i += 1

                # 1つ分の定義の解析
                i = self._parse_block(lines, i, data)

                # 1つ分のデータをValue Objectに格納する
                parsed_data = self._convert_types(file_path, obj_id, data)
                datas.append(parsed_data)
                obj_id = None  # 次のビルディングのためにリセット

            else:
                # 定義外のトップレベルのキーバリューペアなどは無視
                i += 1

        return datas

    def _read_file(self, file_path: Union[str, bytes, LiteralString], replace_params: dict) -> list[str]:
        # 一旦全行読み込む。ファイルサイズが巨大なものはないので、メモリの消費量を考慮する必要なし
        with open(file_path, 'r', encoding='utf-8') as f:
            origin_datas = f.readlines()

        # そのままだと処理が面倒になるのでコメント行は全部削除する
        origin_datas[:] = [line.split('#', 1)[0] for line in origin_datas]

        # inline_scriptがある場合は事前に読み込んでおく
        lines = []
        i = 0
        while i < len(origin_datas):
            line = origin_datas[i]
            for key, value in replace_params.items():
                line = line.replace('$' + key + '$', value)

            if 'inline_script' in line:
                if self.key_block_start_pattern.match(line):
                    block_content, next_idx = self._extract_raw_block_content(origin_datas, i + 1, replace_params, return_full_block=False)
                    inline_script_string = block_content.strip()
                    inline_script_dict = {item.split('=')[0].strip().strip('"'): item.split('=')[1].strip().strip('"') for item in inline_script_string.split('\n')}
                    i = next_idx
                else:
                    inline_script_string = line.strip()
                    inline_script_dict = {'script': inline_script_string.split('=')[1].strip().strip('"')}
                    i += 1

                # inline_fileの読み込み処理
                file = os.path.join(settings.GAME_BASE_DIR, settings.INLINE_SCRIPTS_DIR, inline_script_dict['script'] + '.txt')
                inline_lines = self._read_file(file, inline_script_dict)
                lines.extend(inline_lines)
            else:
                # '{'や'}'がある場合、後々解析する際に面倒になるので都合の良い場所で改行する
                if '{' in line:
                    line_array = [item + '{' for item in line.split('{')]
                    line_array[-1] = line_array[-1][:-1]
                else:
                    line_array = [line]

                for line2 in line_array:
                    if '}' in line2:
                        line_array = [item for sublist in [[x, "}"] for x in line2.split('}')] for item in sublist][:-1]
                        lines.extend(line_array)
                    else:
                        lines.append(line2)

                i += 1

        return lines

    def _parse_block(self, lines: list[str], start_index: int, data_dict: dict[str, Any]) -> int:
        """
        '{' から '}' までのブロックを再帰的に解析します。
        """
        i = start_index
        while i < len(lines):
            line = lines[i].strip()

            # ブロックの終わり、次の行から再開
            if self.block_end_pattern.match(line):
                return i + 1

            # コメント行は無視
            if not line or self.comment_pattern.match(line):
                i += 1
                continue

            # キーとブロックの開始 (e.g., `key = {`)
            block_start_match = self.key_block_start_pattern.match(line)
            if block_start_match:
                key = block_start_match.group(1)
                if key in self._get_simlle_list_keys():
                    # シンプルな文字列リストのブロックを処理 (例: building_sets = { government })
                    list_items, next_idx = self._extract_simple_list_content(lines, i + 1)
                    data_dict[key] = list_items
                    i = next_idx
                elif key in self._get_prerequisites_block_keys():
                    # 生の文字列として保持するブロックを処理 (例: potential = { ... })
                    block_content, next_idx = self._extract_raw_block_content(lines, i + 1, return_full_block=False)
                    data_dict[key] = block_content.strip()
                    i = next_idx
                elif key in self._multi_raw_string_block_keys():
                    # 複数出現する可能性のある構造化されたブロック (例: triggered_planet_modifier, inline_script)
                    # これらのブロックは内部にキーと値のペアを持つため、再帰的に解析する
                    inner_data = {}
                    next_idx = self._parse_block(lines, i + 1, inner_data)
                    if key not in data_dict:
                        data_dict[key] = []
                    data_dict[key].append(inner_data)
                    i = next_idx
                else:  # その他の通常のブロック（ネストされた辞書として解析）
                    inner_data = {}
                    next_idx = self._parse_block(lines, i + 1, inner_data)
                    data_dict[key] = inner_data
                    i = next_idx
                continue

            # キーと値のペア (e.g., `key = value` または `key = @variable`)
            key_value_match = self.key_value_pattern.match(line)
            if key_value_match:
                key = key_value_match.group(1)
                value = key_value_match.group(2).strip()
                data_dict[key] = value
                i += 1
                continue

            i += 1  # どのパターンにもマッチしない行はスキップ（エラー行など）

        return i  # ブロックの終わりが見つからずにファイル終端に達した場合

    def _extract_raw_block_content(self, lines: list[str], start_index: int, replace_params: dict = {}, return_full_block: bool = False) -> tuple[str, int]:
        """
        現在の行から開始して、対応する '}' までのブロックの生のコンテンツを抽出します。
        """
        content_lines = []
        balance = 1  # 最初の '{' に対応
        i = start_index
        while i < len(lines) and balance > 0:
            line = lines[i]

            # コメントは削る。
            line = line.split('#', 1)[0]

            # inline_scriptの置き換え文字列は置き換える。
            for key, value in replace_params.items():
                line = line.replace('$' + key + '$', value)

            # タブスペース等の余計な空白は空白スペース一つだけに置き換える
            line = re.sub(r'\s+', ' ', line)

            # 編集した結果中身が空や空白のみになった場合は無視する
            if not line or line.isspace():
                i += 1
                continue

            balance += line.count('{')
            balance -= line.count('}')
            if balance > 0 or (balance == 0 and return_full_block):
                # ブロックの終了行でなければ、または終了行でも完全なブロックを返す場合は追加
                content_lines.append(line)

            i += 1
        return "\n".join(content_lines), i  # 読み進めた次の行のインデックスを返す

    def _extract_simple_list_content(self, lines: list[str], start_index: int) -> tuple[list[str], int]:
        """
        シンプルなリストブロック（例: `building_sets = { item1 item2 }`）から項目を抽出します。
        項目は各行の単一のワードで、明示的なキーと値のペアはありません。
        """
        list_items: list[str] = []
        i = start_index
        while i < len(lines):
            line = lines[i].strip()
            # ブロックの終わり
            if self.block_end_pattern.match(line):
                return list_items, i + 1

            # コメントは削る。
            # 削った結果中身が空や空白のみになった場合は無視する
            line = line.split('#', 1)[0]
            if not line or line.isspace():
                i += 1
                continue

            items = line.strip().split()
            for item in items:
                if item:  # 空文字列でなければ追加
                    list_items.append(item.replace('"', '').strip())  # クォートがあれば除去

            i += 1

        return list_items, i  # should not be reached if block is balanced

    def _convert_types(self, file_path: str, obj_id: str, data: dict[str, Any]) -> T:
        converted_data = {'file_path': file_path, 'obj_id': obj_id}

        # extra_properties に渡すための辞書を初期化
        extra_props = {}

        for key, value in data.items():
            processed_value = None
            if value is None:
                processed_value = None
            # 真偽値の変換
            elif isinstance(value, str) and value.lower() in ['yes', 'no']:
                processed_value = (value.lower() == 'yes')
            # 整数の変換
            elif isinstance(value, str) and value.isdigit():
                processed_value = int(value)
            # 浮動小数点数の変換（@変数やその他の数値でない文字列はそのまま）
            elif isinstance(value, str) and (re.fullmatch(r'[-+]?\d*\.\d+|\d+', value) or value.startswith('@')):
                try:
                    if value.startswith('@'):
                        processed_value = value  # @で始まる値は文字列のまま
                    else:
                        processed_value = float(value)  # それ以外は数値に変換を試みる
                except ValueError:
                    processed_value = value  # 変換できない場合は文字列のまま
            # リストや辞書（すでにパーサーで処理済み）はそのまま
            elif isinstance(value, (list, dict)):
                processed_value = value
            # その他の文字列はそのまま
            else:
                processed_value = value

            # 変換後のデータを適切な場所（明示的引数またはextra_props）に格納
            if key in self._get_param_names():
                converted_data[key] = processed_value
            else:
                extra_props[key] = processed_value

        # extra_props を **kwargs として渡せるように converted_data に追加
        converted_data.update(extra_props)

        return self._model_class(**converted_data)
