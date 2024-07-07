@echo off
REM Store the current directory
set CURRENT_DIR=%cd%

echo Installing frontend dependencies...
cd /d %CURRENT_DIR%\frontend
start /wait cmd /c "npm install"
if errorlevel 1 (
    echo Failed to install frontend dependencies.
    pause
    goto end
)

echo Installing backend dependencies...
cd /d %CURRENT_DIR%\backend
start /wait cmd /c "npm install"
if errorlevel 1 (
    echo Failed to install backend dependencies.
    pause
    goto end
)

echo All dependencies installed successfully.
pause

:end
