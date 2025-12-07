// Shopping List Price Comparison App

class ShoppingListApp {
    constructor() {
        this.shoppingList = [];
        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        this.itemInput = document.getElementById('item-input');
        this.addItemBtn = document.getElementById('add-item-btn');
        this.shoppingListEl = document.getElementById('shopping-list');
        this.compareBtn = document.getElementById('compare-btn');
        this.resultsSection = document.getElementById('results-section');
        this.resultsContainer = document.getElementById('results-container');
    }

    attachEventListeners() {
        this.addItemBtn.addEventListener('click', () => this.addItem());
        this.itemInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addItem();
            }
        });
        this.compareBtn.addEventListener('click', () => this.compareStores());
    }

    addItem() {
        const itemName = this.itemInput.value.trim().toLowerCase();
        
        if (!itemName) {
            alert('Please enter an item name');
            return;
        }

        if (this.shoppingList.includes(itemName)) {
            alert('This item is already in your shopping list');
            return;
        }

        this.shoppingList.push(itemName);
        this.renderShoppingList();
        this.itemInput.value = '';
        this.itemInput.focus();
        this.updateCompareButton();
    }

    removeItem(itemName) {
        this.shoppingList = this.shoppingList.filter(item => item !== itemName);
        this.renderShoppingList();
        this.updateCompareButton();
        this.hideResults();
    }

    renderShoppingList() {
        this.shoppingListEl.innerHTML = '';
        
        this.shoppingList.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="item-name">${this.capitalizeFirst(item)}</span>
                <button class="remove-btn" data-item="${item}">Remove</button>
            `;
            
            const removeBtn = li.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => this.removeItem(item));
            
            this.shoppingListEl.appendChild(li);
        });
    }

    updateCompareButton() {
        this.compareBtn.disabled = this.shoppingList.length === 0;
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    compareStores() {
        if (this.shoppingList.length === 0) {
            return;
        }

        const storeResults = stores.map(store => {
            let totalPrice = 0;
            let availableItems = 0;
            const itemPrices = {};

            this.shoppingList.forEach(item => {
                if (store.products[item] !== undefined) {
                    itemPrices[item] = store.products[item];
                    totalPrice += store.products[item];
                    availableItems++;
                } else {
                    itemPrices[item] = null; // Item not available
                }
            });

            return {
                store: store.name,
                storeType: store.type,
                totalPrice: totalPrice,
                availableItems: availableItems,
                totalItems: this.shoppingList.length,
                itemPrices: itemPrices,
                allItemsAvailable: availableItems === this.shoppingList.length
            };
        });

        // Filter stores that have all items available
        const storesWithAllItems = storeResults.filter(result => result.allItemsAvailable);

        // Sort by total price (ascending)
        storeResults.sort((a, b) => {
            // Prioritize stores with all items
            if (a.allItemsAvailable && !b.allItemsAvailable) return -1;
            if (!a.allItemsAvailable && b.allItemsAvailable) return 1;
            
            // Then sort by price
            return a.totalPrice - b.totalPrice;
        });

        this.displayResults(storeResults);
    }

    displayResults(results) {
        this.resultsContainer.innerHTML = '';
        
        if (results.length === 0) {
            this.resultsContainer.innerHTML = '<p>No results found.</p>';
            this.resultsSection.style.display = 'block';
            return;
        }

        const bestResult = results[0];

        results.forEach((result, index) => {
            const isBestOption = index === 0 && result.allItemsAvailable;
            
            const resultDiv = document.createElement('div');
            resultDiv.className = `store-result ${isBestOption ? 'best-option' : ''}`;
            
            const availabilityText = result.allItemsAvailable 
                ? '✓ All items available'
                : `⚠️ ${result.availableItems}/${result.totalItems} items available`;

            const itemBreakdownHtml = this.generateItemBreakdown(result);

            resultDiv.innerHTML = `
                <div class="store-header">
                    <div>
                        <div class="store-name">${result.store}</div>
                        <div style="font-size: 0.9rem; color: #6b7280; margin-top: 4px;">
                            ${availabilityText}
                        </div>
                    </div>
                    <div style="text-align: right;">
                        ${isBestOption ? '<div class="best-badge">🏆 Best Option</div>' : ''}
                        <div class="total-price">€${result.totalPrice.toFixed(2)}</div>
                    </div>
                </div>
                <div class="item-breakdown">
                    ${itemBreakdownHtml}
                </div>
            `;

            this.resultsContainer.appendChild(resultDiv);
        });

        this.resultsSection.style.display = 'block';
        this.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    generateItemBreakdown(result) {
        let html = '<details><summary>View item prices</summary><ul class="item-list">';
        
        for (const [item, price] of Object.entries(result.itemPrices)) {
            if (price !== null) {
                html += `<li><span>${this.capitalizeFirst(item)}</span><span>€${price.toFixed(2)}</span></li>`;
            } else {
                html += `<li><span>${this.capitalizeFirst(item)}</span><span class="unavailable">Not available</span></li>`;
            }
        }
        
        html += '</ul></details>';
        return html;
    }

    hideResults() {
        if (this.shoppingList.length === 0) {
            this.resultsSection.style.display = 'none';
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ShoppingListApp();
});
