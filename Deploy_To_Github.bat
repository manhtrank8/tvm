@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
color 0A

echo ========================================================
echo        TOOL DEPLOY LANDING PAGE LEN GITHUB PAGES
echo ========================================================
echo.

:: Kiem tra neu chua init git
if not exist ".git" (
    echo [*] Dang khoi tao Git repository...
    git init
)

echo [*] Dang add cac file...
git add .

echo.
set /p commitMsg="[*] Nhap ghi chu cho lan update nay (An Enter de mac dinh la 'Update portfolio'): "
if "%commitMsg%"=="" set commitMsg=Update portfolio

echo [*] Dang commit...
git commit -m "%commitMsg%"

echo [*] Chuyen sang nhanh main...
git branch -M main

:: Kiem tra xem da co remote (link github) chua
git remote -v | find "origin" >nul 2>&1
if errorlevel 1 (
    echo.
    echo [!] CHUA CO LINK GITHUB REPOSITORY!
    echo Ban can tao 1 repository moi tren GitHub (chon Public/Private) roi copy link vao day.
    set /p remoteUrl="-> Nhap link Github Repo (vd: https://github.com/username/repo.git): "
    git remote add origin !remoteUrl!
)

echo.
echo [*] Dang day code len GitHub...
git push -u origin main

echo.
echo ========================================================
echo XONG!
echo Neu code day thanh cong, GitHub Actions (File deploy.yml)
echo se tu dong build React va day len GitHub Pages.
echo Ban chi can vao GitHub -^> Muc 'Actions' de theo doi.
echo ========================================================
pause
