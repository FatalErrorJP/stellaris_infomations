@echo off

rem asciidoc�t�H���_��docs�t�H���_���폜����
rd /s /q asciidoc
rd /s /q docs

rem �K�v�ȃt�H���_���쐬����
mkdir asciidoc
mkdir docs
mkdir docs\css
mkdir docs\js
mkdir docs\guides

rem staticfile�t�H���_����A�K�v�Ȋe��t�@�C�����R�s�[����
robocopy staticfile\asciidoc asciidoc *.adoc /S
robocopy staticfile\asciidoc docs *.png /S
robocopy staticfile\css docs\css *.css /S
robocopy staticfile\js docs\js *.js /S
robocopy staticfile\yaml docs *.yml /S

rem Stellaris File To AsciiDoc
python -m src.main
IF ERRORLEVEL 1 GOTO ERR

rem AsciiDoc To Html
rem -a nofooter �t�b�^�[���\���ɂ���
rem -a linkcss : CSS�𖄂ߍ��܂Ȃ�
rem -a stylesdir : CSS�̃f�B���N�g���p�X
rem -a stylesheet : CSS�t�@�C����
rem -D : �o�͐�f�B���N�g��
call asciidoctor -a nofooter -a linkcss -a stylesdir=./css -a stylesheet=default.css -D docs asciidoc\index.adoc
call asciidoctor -a nofooter -a linkcss -a stylesdir=./css -a stylesheet=leader_traits.css -D ./docs ./asciidoc/leader_traits.adoc
call asciidoctor -a nofooter -a linkcss -a stylesdir=../css -a stylesheet=default.css -D ./docs/guides asciidoc/guides/*.adoc

:ERR
