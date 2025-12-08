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

#### Option 1: Using Chromium Browser (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/gauthiervq-sys/Shoppingcomp.git
   cd Shoppingcomp
   ```

2. Open with Chromium:
   ```bash
   chromium-browser index.html
   ```

#### Option 2: Using Lightweight HTTP Server

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

#### Option 3: Auto-start on Boot (Kiosk Mode)

To run the app automatically when your Raspberry Pi boots:

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

- **Use Lite OS**: For best performance, consider using Raspberry Pi OS Lite with a lightweight browser
- **Disable animations**: The app works great even with browser animations disabled
- **Screen Resolution**: Optimized for 1920x1080, but responsive design works on any resolution
- **Memory**: The app uses minimal memory (~50MB), perfect for Raspberry Pi 5's 4GB+ RAM

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

- **HTML5**: Structure and semantics
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript**: Application logic and interactivity
- **No Dependencies**: Pure web technologies, no frameworks or libraries required

## File Structure

```
Shoppingcomp/
├── index.html          # Main HTML page
├── styles.css          # Styling and layout
├── app.js              # Application logic
├── stores-data.js      # Store and product pricing data
└── README.md           # Documentation
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
