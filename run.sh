#!/bin/bash

# Open a new terminal for the frontend and run the command
gnome-terminal -- bash -c "cd ./frontend && ng serve --watch --open; exec bash" &
if [ $? -ne 0 ]; then
    echo "Failed to start frontend service"
    exit 1
fi

# Open a new terminal for the backend and run the command
gnome-terminal -- bash -c "cd ./backend && nest start --watch; exec bash" &
if [ $? -ne 0 ]; then
    echo "Failed to start backend service"
    exit 1
fi

echo "Services started successfully in separate terminals"
