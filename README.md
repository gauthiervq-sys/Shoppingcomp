# 🛒 Shopping List Price Comparison

A web application that helps you find the best store to buy your entire shopping list by comparing prices across multiple Belgian and Dutch supermarkets.

## Features

- **Multi-Item Comparison**: Compare prices for your entire shopping list, not just individual items
- **20+ Store Support**: Includes traditional supermarkets, discount stores, organic shops, online stores, and quick commerce services
- **Best Price Finder**: Automatically identifies the most cost-effective option for your complete shopping list
- **Item Availability**: Shows which stores have all items vs. partial availability
- **Detailed Breakdown**: View individual item prices at each store
- **Responsive Design**: Works seamlessly on desktop and mobile devices

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

1. **Open the Application**: Open `index.html` in your web browser
2. **Add Items**: Type item names (e.g., "milk", "bread", "eggs") and click "Add Item"
3. **Build Your List**: Continue adding all items you need to buy
4. **Compare Prices**: Click "Compare Prices" to see results
5. **View Results**: The application will show all stores sorted by total price, with the best option highlighted

## Sample Products Available

The application includes sample pricing data for common grocery items:
- Dairy: milk, butter, cheese, yogurt
- Bakery: bread
- Proteins: eggs, chicken
- Produce: apples, bananas, tomatoes, potatoes
- Pantry: rice, pasta, coffee, tea, sugar, flour, oil, salt, pepper

## Installation

No installation required! This is a pure HTML/CSS/JavaScript application.

1. Clone the repository:
   ```bash
   git clone https://github.com/gauthiervq-sys/Shoppingcomp.git
   ```

2. Open `index.html` in your web browser

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
