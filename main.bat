@echo off

rem asciidocフォルダとdocsフォルダを削除する
rd /s /q asciidoc
rd /s /q docs

rem staticfileフォルダから、必要な各種ファイルをコピーする
mkdir asciidoc
copy staticfile\asciidoc\*.adoc asciidoc
mkdir docs
copy staticfile\css\*.css docs
copy staticfile\js\*.js docs
copy staticfile\yaml\*.yml docs

rem Stellaris File To AsciiDoc
python -m src.main
IF ERRORLEVEL 1 GOTO ERR

rem AsciiDoc To Html
rem -a nofooter フッターを非表示にする
rem -a linkcss : CSSを埋め込まない
rem -a stylesdir : CSSのディレクトリパス
rem -a stylesheet : CSSファイル名
rem -D : 出力先ディレクトリ
call asciidoctor -a nofooter -D docs asciidoc\index.adoc
call asciidoctor -a nofooter -a linkcss -a stylesdir=./ -a stylesheet=leader_traits.css -D ./docs ./asciidoc/leader_traits.adoc

:ERR

