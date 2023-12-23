@echo off

rem asciidocフォルダとdocsフォルダを削除する
rd /s /q asciidoc
rd /s /q docs

rem 必要なフォルダを作成する
mkdir asciidoc
mkdir docs
mkdir docs\css
mkdir docs\js
mkdir docs\guides

rem staticfileフォルダから、必要な各種ファイルをコピーする
robocopy staticfile\asciidoc asciidoc *.adoc /S
robocopy staticfile\asciidoc docs *.png /S
robocopy staticfile\css docs\css *.css /S
robocopy staticfile\js docs\js *.js /S
robocopy staticfile\yaml docs *.yml /S

rem Stellaris File To AsciiDoc
python -m src.main
IF ERRORLEVEL 1 GOTO ERR

rem AsciiDoc To Html
rem -a nofooter フッターを非表示にする
rem -a linkcss : CSSを埋め込まない
rem -a stylesdir : CSSのディレクトリパス
rem -a stylesheet : CSSファイル名
rem -D : 出力先ディレクトリ
call asciidoctor -a nofooter -a linkcss -a stylesdir=./css -a stylesheet=default.css -D docs asciidoc\index.adoc
call asciidoctor -a nofooter -a linkcss -a stylesdir=./css -a stylesheet=leader_traits.css -D ./docs ./asciidoc/leader_traits.adoc
call asciidoctor -a nofooter -a linkcss -a stylesdir=../css -a stylesheet=default.css -D ./docs/guides asciidoc/guides/*.adoc

:ERR
