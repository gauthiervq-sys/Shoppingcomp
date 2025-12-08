# 🛒 Shopping List Price Comparison

A web application that helps you find the best store to buy your entire shopping list by comparing prices across multiple Belgian and Dutch supermarkets.

## Features

- **Category-Based Product Selection**: Browse products organized by categories (Dairy, Breakfast Cereals, Vegetables & Fruit, etc.)
- **Brand Selection**: Choose between House Brand (Huismerk) and Premium Brand for each product
- **Multi-Item Comparison**: Compare prices for your entire shopping list, not just individual items
- **20+ Store Support**: Includes traditional supermarkets, discount stores, organic shops, online stores, and quick commerce services
- **Best Price Finder**: Automatically identifies the most cost-effective option for your complete shopping list
- **Item Availability**: Shows which stores have all items vs. partial availability
- **Detailed Breakdown**: View individual item prices at each store
- **Responsive Design**: Works seamlessly on desktop, mobile devices, and Raspberry Pi
- **Raspberry Pi Compatible**: Optimized to run smoothly on Raspberry Pi 5 with Linux

## Supported Stores

### Traditional Supermarkets
- Colruyt (Collect&Go)
- Delhaize
- Carrefour
- Albert Heijn
- Jumbo
- Cora
- Intermarché
- Spar

### Discount Stores
- Aldi
- Lidl
- OKay

### Specialty/Organic Stores
- Bio-Planet
- Cru

### Online Stores
- Rayon
- Crisp
- Ochama
- Kazidomi

### Quick Commerce (App-based)
- Uber Eats (Supermarket section)
- Deliveroo (Supermarket section)
- Flink

## How to Use

1. **Open the Application**: Open `index.html` in your web browser (or follow Raspberry Pi instructions above)
2. **Browse Categories**: Click on a category in the left sidebar to filter products (or view all products)
3. **Select Products**: Choose a product from the dropdown menu
4. **Choose Brand**: Select between House Brand (Huismerk) or Premium Brand
5. **Add to List**: Click "Add to List" button
6. **Build Your List**: Continue adding all items you need to buy
7. **Compare Prices**: Click "Compare Prices" to see results
8. **View Results**: The application will show all stores sorted by total price, with the best option highlighted

## Sample Products Available

The application includes sample pricing data organized by categories:

### Zuivel (Dairy)
- Milk, Butter, Cheese, Yogurt

### Brood & Bakkerij (Bread & Bakery)
- Bread

### Vlees & Vis (Meat & Fish)
- Eggs, Chicken

### Groenten & Fruit (Vegetables & Fruit)
- Apples, Bananas, Tomatoes, Potatoes

### Ontbijtgranen (Breakfast Cereals)
- Cornflakes, Muesli

### Rijst & Pasta (Rice & Pasta)
- Rice, Pasta

### Dranken (Beverages)
- Coffee, Tea

### Kruiden & Specerijen (Herbs & Spices)
- Sugar, Flour, Olive Oil, Salt, Pepper

Each product is available in:
- **House Brand (Huismerk)**: Budget-friendly store brand
- **Premium Brand**: Higher quality branded products (when available)

## Installation

No installation required! This is a pure HTML/CSS/JavaScript application.

### Running on Desktop/Laptop

1. Clone the repository:
   ```bash
   git clone https://github.com/gauthiervq-sys/Shoppingcomp.git
   ```

2. Open `index.html` in your web browser

### Running on Raspberry Pi 5 with Linux

The application runs perfectly on Raspberry Pi 5! Here are the steps:

#### Option 1: Node.js Backend Server (Recommended for Production)

This option sets up a proper Node.js backend server that can run as a system service and start automatically on boot.

1. Clone the repository:
   ```bash
   git clone https://github.com/gauthiervq-sys/Shoppingcomp.git
   cd Shoppingcomp
   ```

2. Run the automated setup script:
   ```bash
   chmod +x setup-raspberry-pi.sh
   ./setup-raspberry-pi.sh
   ```

   The script will:
   - Install Node.js if not present
   - Install dependencies
   - Optionally set up the server to start on boot (systemd service)

3. Access the application:
   - Local: `http://localhost:3000`
   - Network: `http://<your-pi-ip>:3000`

**Manual Setup (Alternative):**

If you prefer to set up manually:

1. Install Node.js:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. Install dependencies:
   ```bash
   cd Shoppingcomp
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

**Service Management Commands:**

Once the systemd service is set up:
```bash
# Check server status
sudo systemctl status shoppingcomp

# Start the server
sudo systemctl start shoppingcomp

# Stop the server
sudo systemctl stop shoppingcomp

# Restart the server
sudo systemctl restart shoppingcomp

# View server logs
sudo journalctl -u shoppingcomp -f

# Disable auto-start on boot
sudo systemctl disable shoppingcomp

# Enable auto-start on boot
sudo systemctl enable shoppingcomp
```

#### Option 2: Using Chromium Browser (Simple Testing)

1. Clone the repository:
   ```bash
   git clone https://github.com/gauthiervq-sys/Shoppingcomp.git
   cd Shoppingcomp
   ```

2. Open with Chromium:
   ```bash
   chromium-browser index.html
   ```

#### Option 3: Using Python HTTP Server (Quick Testing)

1. Install Python 3 (usually pre-installed on Raspberry Pi OS):
   ```bash
   sudo apt update
   sudo apt install python3 -y
   ```

2. Clone and navigate to the repository:
   ```bash
   git clone https://github.com/gauthiervq-sys/Shoppingcomp.git
   cd Shoppingcomp
   ```

3. Start a local web server:
   ```bash
   python3 -m http.server 8000
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

#### Option 4: Auto-start on Boot (Kiosk Mode)

To run the app automatically when your Raspberry Pi boots in kiosk mode:

**Using the Node.js Backend (Recommended):**

1. First, set up the backend service using the setup script (see Option 1 above)

2. Create a kiosk startup script:
   ```bash
   nano ~/start-shopping-kiosk.sh
   ```

3. Add the following content:
   ```bash
   #!/bin/bash
   # Wait for the backend service to start
   sleep 10
   chromium-browser --kiosk http://localhost:3000
   ```

4. Make it executable:
   ```bash
   chmod +x ~/start-shopping-kiosk.sh
   ```

5. Add to autostart:
   ```bash
   mkdir -p ~/.config/autostart
   nano ~/.config/autostart/shopping.desktop
   ```

6. Add this content:
   ```
   [Desktop Entry]
   Type=Application
   Name=Shopping Comparison
   Exec=/home/pi/start-shopping-kiosk.sh
   ```

7. Reboot to test:
   ```bash
   sudo reboot
   ```

**Using Python HTTP Server (Alternative):**

If you prefer not to use the Node.js backend:

1. Create a startup script:
   ```bash
   nano ~/start-shopping.sh
   ```

2. Add the following content:
   ```bash
   #!/bin/bash
   cd /home/pi/Shoppingcomp
   python3 -m http.server 8000 &
   sleep 5
   chromium-browser --kiosk http://localhost:8000
   ```

3. Make it executable:
   ```bash
   chmod +x ~/start-shopping.sh
   ```

4. Add to autostart:
   ```bash
   mkdir -p ~/.config/autostart
   nano ~/.config/autostart/shopping.desktop
   ```

5. Add this content:
   ```
   [Desktop Entry]
   Type=Application
   Name=Shopping Comparison
   Exec=/home/pi/start-shopping.sh
   ```

6. Reboot to test:
   ```bash
   sudo reboot
   ```

#### Performance Tips for Raspberry Pi

- **Use Node.js Backend**: The Node.js backend server provides better performance and reliability than Python's http.server
- **Enable Compression**: The backend server automatically compresses responses for faster loading
- **Use Lite OS**: For best performance, consider using Raspberry Pi OS Lite with a lightweight browser
- **Disable animations**: The app works great even with browser animations disabled
- **Screen Resolution**: Optimized for 1920x1080, but responsive design works on any resolution
- **Memory**: The app uses minimal memory (~50MB for frontend + ~30MB for Node.js backend), perfect for Raspberry Pi 5's 4GB+ RAM
- **Auto-restart**: The systemd service automatically restarts the backend if it crashes

## Usage Example

```
Shopping List:
- milk
- bread
- eggs
- butter
- cheese

Results:
🏆 Aldi - €9.61 (Best Option)
   All items available
   
Lidl - €9.94
   All items available
   
Colruyt - €10.85
   All items available
```

## Technology Stack

### Frontend
- **HTML5**: Structure and semantics
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript**: Application logic and interactivity
- **No Frontend Dependencies**: Pure web technologies, no frameworks or libraries required

### Backend (Optional for Raspberry Pi)
- **Node.js**: Runtime environment
- **Express**: Web server framework
- **Compression**: Response compression middleware for better performance
- **Systemd**: Service management for auto-start on boot

## File Structure

```
Shoppingcomp/
├── index.html              # Main HTML page
├── styles.css              # Styling and layout
├── app.js                  # Frontend application logic
├── stores-data.js          # Store and product pricing data
├── server.js               # Node.js backend server
├── package.json            # Node.js dependencies
├── setup-raspberry-pi.sh   # Automated setup script for Raspberry Pi
├── shoppingcomp.service    # Systemd service configuration
├── .gitignore              # Git ignore file
└── README.md               # Documentation
```

## Future Enhancements

- Real-time price data integration via APIs
- User accounts to save shopping lists
- Store location and delivery options
- Special offers and discounts tracking
- Price history and trends
- Custom product additions
- Export shopping lists

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is open source and available under the MIT License.

## Note

This application uses sample pricing data for demonstration purposes. Actual prices may vary and should be verified with the respective stores.
