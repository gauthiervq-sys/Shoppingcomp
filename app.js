// Shopping List Price Comparison App

class ShoppingListApp {
    constructor() {
        this.shoppingList = [];
        this.selectedCategory = null;
        this.initializeElements();
        this.populateCategories();
        this.populateProducts();
        this.attachEventListeners();
    }

    initializeElements() {
        this.categoryList = document.getElementById('category-list');
        this.productSelect = document.getElementById('product-select');
        this.brandSelect = document.getElementById('brand-select');
        this.addItemBtn = document.getElementById('add-item-btn');
        this.shoppingListEl = document.getElementById('shopping-list');
        this.compareBtn = document.getElementById('compare-btn');
        this.resultsSection = document.getElementById('results-section');
        this.resultsContainer = document.getElementById('results-container');
    }

    populateCategories() {
        this.categoryList.innerHTML = '';
        
        // Add "All Products" option
        const allCategory = document.createElement('div');
        allCategory.className = 'category-item active';
        allCategory.textContent = 'All Products';
        allCategory.dataset.category = 'all';
        this.categoryList.appendChild(allCategory);
        
        // Add all categories
        for (const [key, label] of Object.entries(categories)) {
            const categoryItem = document.createElement('div');
            categoryItem.className = 'category-item';
            categoryItem.textContent = label;
            categoryItem.dataset.category = key;
            this.categoryList.appendChild(categoryItem);
        }
    }

    populateProducts(filterCategory = null) {
        const currentValue = this.productSelect.value;
        this.productSelect.innerHTML = '<option value="">-- Choose a product --</option>';
        
        for (const [key, product] of Object.entries(availableProducts)) {
            if (filterCategory && filterCategory !== 'all' && product.category !== filterCategory) {
                continue;
            }
            
            const option = document.createElement('option');
            option.value = key;
            option.textContent = product.name;
            option.dataset.category = product.category;
            option.dataset.hasHouse = product.hasHouseBrand;
            option.dataset.hasPremium = product.hasPremiumBrand;
            this.productSelect.appendChild(option);
        }
        
        // Restore selection if it still exists
        if (currentValue && this.productSelect.querySelector(`option[value="${currentValue}"]`)) {
            this.productSelect.value = currentValue;
            this.updateBrandOptions();
        }
    }

    updateBrandOptions() {
        const selectedOption = this.productSelect.selectedOptions[0];
        if (!selectedOption || !selectedOption.value) {
            this.brandSelect.innerHTML = '<option value="house">House Brand (Huismerk)</option>';
            this.brandSelect.disabled = true;
            return;
        }
        
        const hasHouse = selectedOption.dataset.hasHouse === 'true';
        const hasPremium = selectedOption.dataset.hasPremium === 'true';
        
        this.brandSelect.innerHTML = '';
        
        if (hasHouse) {
            const houseOption = document.createElement('option');
            houseOption.value = 'house';
            houseOption.textContent = 'House Brand (Huismerk)';
            this.brandSelect.appendChild(houseOption);
        }
        
        if (hasPremium) {
            const premiumOption = document.createElement('option');
            premiumOption.value = 'premium';
            premiumOption.textContent = 'Premium Brand';
            this.brandSelect.appendChild(premiumOption);
        }
        
        this.brandSelect.disabled = false;
    }

    attachEventListeners() {
        // Category selection
        this.categoryList.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-item')) {
                // Update active state
                this.categoryList.querySelectorAll('.category-item').forEach(item => {
                    item.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Filter products
                const category = e.target.dataset.category;
                this.selectedCategory = category === 'all' ? null : category;
                this.populateProducts(this.selectedCategory);
            }
        });
        
        // Product selection change
        this.productSelect.addEventListener('change', () => {
            this.updateBrandOptions();
        });
        
        // Add item button
        this.addItemBtn.addEventListener('click', () => this.addItem());
        
        // Compare button
        this.compareBtn.addEventListener('click', () => this.compareStores());
    }

    addItem() {
        const productKey = this.productSelect.value;
        const brandType = this.brandSelect.value;
        
        if (!productKey) {
            alert('Please select a product');
            return;
        }
        
        const product = availableProducts[productKey];
        const itemId = `${productKey}-${brandType}`;
        
        // Check if item already in list
        if (this.shoppingList.some(item => item.id === itemId)) {
            alert('This item is already in your shopping list');
            return;
        }
        
        this.shoppingList.push({
            id: itemId,
            productKey: productKey,
            productName: product.name,
            brandType: brandType,
            brandLabel: brandType === 'house' ? 'House Brand' : 'Premium Brand'
        });
        
        this.renderShoppingList();
        this.updateCompareButton();
        
        // Reset selection
        this.productSelect.value = '';
        this.updateBrandOptions();
    }

    removeItem(itemId) {
        this.shoppingList = this.shoppingList.filter(item => item.id !== itemId);
        this.renderShoppingList();
        this.updateCompareButton();
        this.hideResults();
    }

    renderShoppingList() {
        this.shoppingListEl.innerHTML = '';
        
        this.shoppingList.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div>
                    <span class="item-name">${item.productName}</span>
                    <span class="item-brand">${item.brandLabel}</span>
                </div>
                <button class="remove-btn" data-item-id="${item.id}">Remove</button>
            `;
            
            const removeBtn = li.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => this.removeItem(item.id));
            
            this.shoppingListEl.appendChild(li);
        });
    }

    updateCompareButton() {
        this.compareBtn.disabled = this.shoppingList.length === 0;
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
                const productData = store.products[item.productKey];
                
                if (productData !== undefined) {
                    // Get price based on brand type
                    let price = null;
                    
                    if (item.brandType === 'house' && productData.house !== undefined) {
                        price = productData.house;
                    } else if (item.brandType === 'premium' && productData.premium !== undefined) {
                        price = productData.premium;
                    }
                    
                    if (price !== null) {
                        itemPrices[item.id] = {
                            name: item.productName,
                            brand: item.brandLabel,
                            price: price
                        };
                        totalPrice += price;
                        availableItems++;
                    } else {
                        itemPrices[item.id] = {
                            name: item.productName,
                            brand: item.brandLabel,
                            price: null
                        };
                    }
                } else {
                    itemPrices[item.id] = {
                        name: item.productName,
                        brand: item.brandLabel,
                        price: null
                    };
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

        // Sort by availability first, then by price
        storeResults.sort((a, b) => {
            if (a.allItemsAvailable && !b.allItemsAvailable) return -1;
            if (!a.allItemsAvailable && b.allItemsAvailable) return 1;
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

        const hasCompleteStores = results.some(r => r.allItemsAvailable);

        results.forEach((result, index) => {
            const isBestOption = index === 0 && result.allItemsAvailable && hasCompleteStores;
            
            const resultDiv = document.createElement('div');
            resultDiv.className = `store-result ${isBestOption ? 'best-option' : ''}`;
            
            const availabilityText = result.allItemsAvailable 
                ? '✓ All items available'
                : `⚠️ ${result.availableItems}/${result.totalItems} items available`;

            const itemBreakdownHtml = this.generateItemBreakdown(result);
            
            const incompleteNote = !result.allItemsAvailable && hasCompleteStores 
                ? '<div style="font-size: 0.85rem; color: #f59e0b; margin-top: 8px;">⚠️ Price shown is incomplete due to unavailable items</div>'
                : '';

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
                ${incompleteNote}
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
        
        for (const [itemId, itemData] of Object.entries(result.itemPrices)) {
            if (itemData.price !== null) {
                html += `<li>
                    <span>${itemData.name} <em>(${itemData.brand})</em></span>
                    <span>€${itemData.price.toFixed(2)}</span>
                </li>`;
            } else {
                html += `<li>
                    <span>${itemData.name} <em>(${itemData.brand})</em></span>
                    <span class="unavailable">Not available</span>
                </li>`;
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
