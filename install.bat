@echo off
REM Store the current directory
set CURRENT_DIR=%cd%

REM Navigate to the 'frontend' directory and install npm packages
echo Installing frontend dependencies...
cd %CURRENT_DIR%\frontend
npm install
if errorlevel 1 (
    echo Failed to install frontend dependencies.
    pause
    exit /b 1
)

REM Navigate to the 'backend' directory and install npm packages
echo Installing backend dependencies...
cd %CURRENT_DIR%\backend
npm install
if errorlevel 1 (
    echo Failed to install backend dependencies.
    pause
    exit /b 1
)

echo All dependencies installed successfully.
pause
exit /b 0
