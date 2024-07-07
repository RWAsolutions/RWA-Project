@echo off

start cmd /k "cd frontend && ng serve --watch --open"
IF %ERRORLEVEL% NEQ 0 (
    echo Failed to start frontend service
    exit /b 1
)

start cmd /k "cd backend && nest start --watch"
IF %ERRORLEVEL% NEQ 0 (
    echo Failed to start backend service
    exit /b 1
)

echo Services started successfully in separate terminals