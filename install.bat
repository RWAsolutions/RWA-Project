@echo off

REM Change to the frontend directory and install dependencies
echo Installing dependencies in ./frontend...
cd frontend
IF %ERRORLEVEL% NEQ 0 (
    echo Failed to navigate to ./frontend directory
    exit /b 1
)
npm install
IF %ERRORLEVEL% NEQ 0 (
    echo npm install failed in ./frontend
    exit /b 1
)

REM Change to the backend directory and install dependencies
echo Installing dependencies in ./backend...
cd ..\backend
IF %ERRORLEVEL% NEQ 0 (
    echo Failed to navigate to ./backend directory
    exit /b 1
)
npm install
IF %ERRORLEVEL% NEQ 0 (
    echo npm install failed in ./backend
    exit /b 1
)

echo Dependencies installed successfully in both ./frontend and ./backend
