@echo off

rem asciidoc�t�H���_��docs�t�H���_���폜����
rd /s /q asciidoc
rd /s /q docs

rem staticfile�t�H���_����A�K�v�Ȋe��t�@�C�����R�s�[����
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
rem -a nofooter �t�b�^�[���\���ɂ���
rem -a linkcss : CSS�𖄂ߍ��܂Ȃ�
rem -a stylesdir : CSS�̃f�B���N�g���p�X
rem -a stylesheet : CSS�t�@�C����
rem -D : �o�͐�f�B���N�g��
call asciidoctor -a nofooter -D docs asciidoc\index.adoc
call asciidoctor -a nofooter -a linkcss -a stylesdir=./ -a stylesheet=leader_traits.css -D ./docs ./asciidoc/leader_traits.adoc

:ERR

