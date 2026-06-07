@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
color 0A

echo ========================================================
echo        TOOL DEPLOY LANDING PAGE LEN GITHUB PAGES
echo ========================================================
echo.

if not exist ".git" (
    echo [*] Dang khoi tao Git repository...
    git init
)

echo [*] Dang add cac file...
git add .

echo.
set commitMsg=Update portfolio
set /p commitMsg="[*] Nhap ghi chu cho lan update nay (An Enter de mac dinh la 'Update portfolio'): "

echo [*] Dang commit...
git commit -m "!commitMsg!"

echo [*] Chuyen sang nhanh main...
git branch -M main

:: Kiem tra xem da co remote chua
git remote -v | find "origin" >nul 2>&1
if errorlevel 1 (
    echo.
    echo [!] CHUA CO LINK GITHUB REPOSITORY!
    set /p remoteUrl="-> Nhap link Github Repo (vd: https://github.com/username/repo.git): "
    git remote add origin "!remoteUrl!"
)

echo.
echo [*] Dang day code len GitHub...
git push -u origin main

echo.
echo ========================================================
echo KET THUC QUA TRINH PUSH CODE.
echo Hay cuon len tren de xem co bao loi mau do (Error) hay khong nhe!
echo ========================================================
pause
