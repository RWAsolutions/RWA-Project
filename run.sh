#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if tmux is installed
if ! command_exists tmux; then
    echo "tmux is not installed. Do you want to install tmux (Y/n)?"
    read -r response
    if [ "$response" = "n" ]; then
        echo "Please install tmux manually and run the script again"
        exit 1
    else
        if command_exists apt-get; then
            sudo apt-get install tmux
        elif command_exists yum; then
            sudo yum install tmux
        elif command_exists brew; then
            brew install tmux
        else
            echo "Please install tmux manually and run the script again"
            exit 1
        fi
fi

# Start a new tmux session named 'dev-session'
tmux new-session -d -s dev-session

# Open a new tmux window for the frontend and run the command
tmux new-window -t dev-session:1 -n frontend
tmux send-keys -t dev-session:1 'cd ./frontend && ng serve --watch --open' C-m

# Open a new tmux window for the backend and run the command
tmux new-window -t dev-session:2 -n backend
tmux send-keys -t dev-session:2 'cd ./backend && nest start --watch' C-m

echo "Services started successfully in separate tmux windows"

# Attach to the tmux session
tmux attach-session -t dev-session
