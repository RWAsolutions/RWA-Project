#!/bin/bash

# Change to the frontend directory and install dependencies
echo "Installing dependencies in ./frontend..."
cd ./frontend || { echo "Failed to navigate to ./frontend directory"; exit 1; }
npm install || { echo "npm install failed in ./frontend"; exit 1; }

# Change to the backend directory and install dependencies
echo "Installing dependencies in ./backend..."
cd ../backend || { echo "Failed to navigate to ./backend directory"; exit 1; }
npm install || { echo "npm install failed in ./backend"; exit 1; }

echo "Dependencies installed successfully in both ./frontend and ./backend"
