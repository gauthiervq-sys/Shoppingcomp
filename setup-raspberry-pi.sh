#!/bin/bash

# Shopping Comparison App - Raspberry Pi 5 Backend Setup Script
# This script sets up the backend server to run automatically on boot

set -e

echo "========================================"
echo "Shopping Comparison App - Backend Setup"
echo "========================================"
echo ""

# Check if running on Linux
if [[ "$OSTYPE" != "linux-gnu"* ]]; then
    echo "Warning: This script is designed for Linux (Raspberry Pi OS)"
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "✓ Node.js is already installed ($(node --version))"
fi

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Install dependencies
echo ""
echo "Installing Node.js dependencies..."
npm install

# Test the server
echo ""
echo "Testing the server..."
timeout 10 node server.js &
SERVER_PID=$!
sleep 5

if ps -p $SERVER_PID > /dev/null; then
    echo "✓ Server test successful"
    kill $SERVER_PID 2>/dev/null || true
else
    echo "✗ Server test failed"
    exit 1
fi

# Ask if user wants to set up systemd service
echo ""
read -p "Do you want to set up the server to start automatically on boot? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Update service file with correct paths
    CURRENT_USER=$(whoami)
    SERVICE_FILE="shoppingcomp.service"
    TEMP_SERVICE="/tmp/shoppingcomp.service.tmp"
    
    # Replace paths in service file
    sed "s|User=pi|User=$CURRENT_USER|g" "$SERVICE_FILE" | \
    sed "s|/home/pi/Shoppingcomp|$SCRIPT_DIR|g" > "$TEMP_SERVICE"
    
    # Install systemd service
    echo "Installing systemd service..."
    sudo cp "$TEMP_SERVICE" /etc/systemd/system/shoppingcomp.service
    sudo systemctl daemon-reload
    sudo systemctl enable shoppingcomp.service
    sudo systemctl start shoppingcomp.service
    rm "$TEMP_SERVICE"
    
    echo ""
    echo "✓ Service installed and started successfully!"
    echo ""
    echo "Service management commands:"
    echo "  - Check status: sudo systemctl status shoppingcomp"
    echo "  - Stop service: sudo systemctl stop shoppingcomp"
    echo "  - Start service: sudo systemctl start shoppingcomp"
    echo "  - Restart service: sudo systemctl restart shoppingcomp"
    echo "  - View logs: sudo journalctl -u shoppingcomp -f"
    echo "  - Disable auto-start: sudo systemctl disable shoppingcomp"
fi

# Get IP address for network access
IP_ADDRESS=$(hostname -I | awk '{print $1}')

echo ""
echo "========================================"
echo "Setup Complete!"
echo "========================================"
echo ""
echo "Access the application:"
echo "  - Local: http://localhost:3000"
if [ -n "$IP_ADDRESS" ]; then
    echo "  - Network: http://$IP_ADDRESS:3000"
fi
echo ""
echo "To start the server manually (without systemd):"
echo "  npm start"
echo ""
