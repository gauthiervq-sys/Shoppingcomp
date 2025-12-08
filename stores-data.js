// Store data with sample product prices
// Prices are in EUR (€)

// Product categories
const categories = {
    "zuivel": "Zuivel (Dairy)",
    "brood-bakkerij": "Brood & Bakkerij (Bread & Bakery)",
    "vlees-vis": "Vlees & Vis (Meat & Fish)",
    "groenten-fruit": "Groenten & Fruit (Vegetables & Fruit)",
    "ontbijtgranen": "Ontbijtgranen (Breakfast Cereals)",
    "rijst-pasta": "Rijst & Pasta (Rice & Pasta)",
    "dranken": "Dranken (Beverages)",
    "kruiden-specerijen": "Kruiden & Specerijen (Herbs & Spices)"
};

// Available products with categories and brand options
const availableProducts = {
    // Zuivel (Dairy)
    "milk": { name: "Milk (1L)", category: "zuivel", hasHouseBrand: true, hasPremiumBrand: true },
    "butter": { name: "Butter (250g)", category: "zuivel", hasHouseBrand: true, hasPremiumBrand: true },
    "cheese": { name: "Cheese (200g)", category: "zuivel", hasHouseBrand: true, hasPremiumBrand: true },
    "yogurt": { name: "Yogurt (500g)", category: "zuivel", hasHouseBrand: true, hasPremiumBrand: true },
    
    // Brood & Bakkerij
    "bread": { name: "Bread (800g)", category: "brood-bakkerij", hasHouseBrand: true, hasPremiumBrand: true },
    
    // Vlees & Vis
    "eggs": { name: "Eggs (10 pieces)", category: "vlees-vis", hasHouseBrand: true, hasPremiumBrand: true },
    "chicken": { name: "Chicken (1kg)", category: "vlees-vis", hasHouseBrand: true, hasPremiumBrand: true },
    
    // Groenten & Fruit
    "apples": { name: "Apples (1kg)", category: "groenten-fruit", hasHouseBrand: true, hasPremiumBrand: true },
    "bananas": { name: "Bananas (1kg)", category: "groenten-fruit", hasHouseBrand: true, hasPremiumBrand: true },
    "tomatoes": { name: "Tomatoes (1kg)", category: "groenten-fruit", hasHouseBrand: true, hasPremiumBrand: true },
    "potatoes": { name: "Potatoes (2kg)", category: "groenten-fruit", hasHouseBrand: true, hasPremiumBrand: true },
    
    // Ontbijtgranen
    "cornflakes": { name: "Cornflakes (500g)", category: "ontbijtgranen", hasHouseBrand: true, hasPremiumBrand: true },
    "muesli": { name: "Muesli (500g)", category: "ontbijtgranen", hasHouseBrand: true, hasPremiumBrand: true },
    
    // Rijst & Pasta
    "rice": { name: "Rice (1kg)", category: "rijst-pasta", hasHouseBrand: true, hasPremiumBrand: true },
    "pasta": { name: "Pasta (500g)", category: "rijst-pasta", hasHouseBrand: true, hasPremiumBrand: true },
    
    // Dranken
    "coffee": { name: "Coffee (250g)", category: "dranken", hasHouseBrand: true, hasPremiumBrand: true },
    "tea": { name: "Tea (20 bags)", category: "dranken", hasHouseBrand: true, hasPremiumBrand: true },
    
    // Kruiden & Specerijen
    "sugar": { name: "Sugar (1kg)", category: "kruiden-specerijen", hasHouseBrand: true, hasPremiumBrand: false },
    "flour": { name: "Flour (1kg)", category: "kruiden-specerijen", hasHouseBrand: true, hasPremiumBrand: false },
    "oil": { name: "Olive Oil (750ml)", category: "kruiden-specerijen", hasHouseBrand: true, hasPremiumBrand: true },
    "salt": { name: "Salt (1kg)", category: "kruiden-specerijen", hasHouseBrand: true, hasPremiumBrand: false },
    "pepper": { name: "Pepper (50g)", category: "kruiden-specerijen", hasHouseBrand: true, hasPremiumBrand: true }
};

const stores = [
    {
        name: "Colruyt (Collect&Go)",
        type: "traditional",
        products: {
            "milk": { house: 0.89, premium: 1.29 },
            "bread": { house: 1.19, premium: 1.89 },
            "eggs": { house: 2.49, premium: 3.49 },
            "butter": { house: 2.29, premium: 3.29 },
            "cheese": { house: 3.99, premium: 5.99 },
            "chicken": { house: 5.99, premium: 8.99 },
            "apples": { house: 1.79, premium: 2.49 },
            "bananas": { house: 1.29, premium: 1.79 },
            "tomatoes": { house: 2.19, premium: 2.99 },
            "potatoes": { house: 1.99, premium: 2.69 },
            "rice": { house: 2.49, premium: 3.49 },
            "pasta": { house: 0.99, premium: 1.49 },
            "yogurt": { house: 1.49, premium: 2.19 },
            "coffee": { house: 4.99, premium: 7.99 },
            "tea": { house: 2.29, premium: 3.49 },
            "sugar": { house: 1.19 },
            "flour": { house: 0.89 },
            "oil": { house: 3.49, premium: 5.99 },
            "salt": { house: 0.79 },
            "pepper": { house: 1.99, premium: 3.49 },
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Delhaize",
        type: "traditional",
        products: {
            "milk": { house: 0.95, premium: 1.38 },
            "bread": { house: 1.29, premium: 1.87 },
            "eggs": { house: 2.69, premium: 3.9 },
            "butter": { house: 2.49, premium: 3.61 },
            "cheese": { house: 4.29, premium: 6.22 },
            "chicken": { house: 6.49, premium: 9.41 },
            "apples": { house: 1.99, premium: 2.89 },
            "bananas": { house: 1.39, premium: 2.02 },
            "tomatoes": { house: 2.39, premium: 3.47 },
            "potatoes": { house: 2.19, premium: 3.18 },
            "rice": { house: 2.69, premium: 3.9 },
            "pasta": { house: 1.09, premium: 1.58 },
            "yogurt": { house: 1.59, premium: 2.31 },
            "coffee": { house: 5.49, premium: 7.96 },
            "tea": { house: 2.49, premium: 3.61 },
            "sugar": { house: 1.29 },
            "flour": { house: 0.99 },
            "oil": { house: 3.79, premium: 5.5 },
            "salt": { house: 0.89 },
            "pepper": { house: 2.19, premium: 3.18 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Carrefour",
        type: "traditional",
        products: {
            "milk": { house: 0.92, premium: 1.33 },
            "bread": { house: 1.25, premium: 1.81 },
            "eggs": { house: 2.59, premium: 3.76 },
            "butter": { house: 2.39, premium: 3.47 },
            "cheese": { house: 4.19, premium: 6.08 },
            "chicken": { house: 6.29, premium: 9.12 },
            "apples": { house: 1.89, premium: 2.74 },
            "bananas": { house: 1.35, premium: 1.96 },
            "tomatoes": { house: 2.29, premium: 3.32 },
            "potatoes": { house: 2.09, premium: 3.03 },
            "rice": { house: 2.59, premium: 3.76 },
            "pasta": { house: 1.05, premium: 1.52 },
            "yogurt": { house: 1.55, premium: 2.25 },
            "coffee": { house: 5.29, premium: 7.67 },
            "tea": { house: 2.39, premium: 3.47 },
            "sugar": { house: 1.25 },
            "flour": { house: 0.95 },
            "oil": { house: 3.69, premium: 5.35 },
            "salt": { house: 0.85 },
            "pepper": { house: 2.09, premium: 3.03 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Albert Heijn",
        type: "traditional",
        products: {
            "milk": { house: 0.93, premium: 1.35 },
            "bread": { house: 1.35, premium: 1.96 },
            "eggs": { house: 2.79, premium: 4.05 },
            "butter": { house: 2.59, premium: 3.76 },
            "cheese": { house: 4.49, premium: 6.51 },
            "chicken": { house: 6.69, premium: 9.7 },
            "apples": { house: 2.09, premium: 3.03 },
            "bananas": { house: 1.45, premium: 2.1 },
            "tomatoes": { house: 2.49, premium: 3.61 },
            "potatoes": { house: 2.29, premium: 3.32 },
            "rice": { house: 2.79, premium: 4.05 },
            "pasta": { house: 1.15, premium: 1.67 },
            "yogurt": { house: 1.69, premium: 2.45 },
            "coffee": { house: 5.69, premium: 8.25 },
            "tea": { house: 2.59, premium: 3.76 },
            "sugar": { house: 1.35 },
            "flour": { house: 1.05 },
            "oil": { house: 3.89, premium: 5.64 },
            "salt": { house: 0.95 },
            "pepper": { house: 2.29, premium: 3.32 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Jumbo",
        type: "traditional",
        products: {
            "milk": { house: 0.91, premium: 1.32 },
            "bread": { house: 1.22, premium: 1.77 },
            "eggs": { house: 2.55, premium: 3.7 },
            "butter": { house: 2.35, premium: 3.41 },
            "cheese": { house: 4.15, premium: 6.02 },
            "chicken": { house: 6.19, premium: 8.98 },
            "apples": { house: 1.85, premium: 2.68 },
            "bananas": { house: 1.32, premium: 1.91 },
            "tomatoes": { house: 2.25, premium: 3.26 },
            "potatoes": { house: 2.05, premium: 2.97 },
            "rice": { house: 2.55, premium: 3.7 },
            "pasta": { house: 1.02, premium: 1.48 },
            "yogurt": { house: 1.52, premium: 2.2 },
            "coffee": { house: 5.19, premium: 7.53 },
            "tea": { house: 2.35, premium: 3.41 },
            "sugar": { house: 1.22 },
            "flour": { house: 0.92 },
            "oil": { house: 3.59, premium: 5.21 },
            "salt": { house: 0.82 },
            "pepper": { house: 2.05, premium: 2.97 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Aldi",
        type: "discount",
        products: {
            "milk": { house: 0.79, premium: 1.15 },
            "bread": { house: 1.05, premium: 1.52 },
            "eggs": { house: 2.29, premium: 3.32 },
            "butter": { house: 1.99, premium: 2.89 },
            "cheese": { house: 3.49, premium: 5.06 },
            "chicken": { house: 5.49, premium: 7.96 },
            "apples": { house: 1.59, premium: 2.31 },
            "bananas": { house: 1.15, premium: 1.67 },
            "tomatoes": { house: 1.99, premium: 2.89 },
            "potatoes": { house: 1.79, premium: 2.6 },
            "rice": { house: 2.19, premium: 3.18 },
            "pasta": { house: 0.85, premium: 1.23 },
            "yogurt": { house: 1.29, premium: 1.87 },
            "coffee": { house: 4.49, premium: 6.51 },
            "tea": { house: 1.99, premium: 2.89 },
            "sugar": { house: 0.99 },
            "flour": { house: 0.75 },
            "oil": { house: 3.19, premium: 4.63 },
            "salt": { house: 0.65 },
            "pepper": { house: 1.79, premium: 2.6 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Lidl",
        type: "discount",
        products: {
            "milk": { house: 0.82, premium: 1.19 },
            "bread": { house: 1.09, premium: 1.58 },
            "eggs": { house: 2.35, premium: 3.41 },
            "butter": { house: 2.09, premium: 3.03 },
            "cheese": { house: 3.59, premium: 5.21 },
            "chicken": { house: 5.69, premium: 8.25 },
            "apples": { house: 1.65, premium: 2.39 },
            "bananas": { house: 1.19, premium: 1.73 },
            "tomatoes": { house: 2.05, premium: 2.97 },
            "potatoes": { house: 1.85, premium: 2.68 },
            "rice": { house: 2.29, premium: 3.32 },
            "pasta": { house: 0.89, premium: 1.29 },
            "yogurt": { house: 1.35, premium: 1.96 },
            "coffee": { house: 4.69, premium: 6.8 },
            "tea": { house: 2.09, premium: 3.03 },
            "sugar": { house: 1.05 },
            "flour": { house: 0.79 },
            "oil": { house: 3.29, premium: 4.77 },
            "salt": { house: 0.69 },
            "pepper": { house: 1.85, premium: 2.68 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Cora",
        type: "traditional",
        products: {
            "milk": { house: 0.94, premium: 1.36 },
            "bread": { house: 1.28, premium: 1.86 },
            "eggs": { house: 2.65, premium: 3.84 },
            "butter": { house: 2.45, premium: 3.55 },
            "cheese": { house: 4.25, premium: 6.16 },
            "chicken": { house: 6.39, premium: 9.27 },
            "apples": { house: 1.95, premium: 2.83 },
            "bananas": { house: 1.42, premium: 2.06 },
            "tomatoes": { house: 2.35, premium: 3.41 },
            "potatoes": { house: 2.15, premium: 3.12 },
            "rice": { house: 2.65, premium: 3.84 },
            "pasta": { house: 1.08, premium: 1.57 },
            "yogurt": { house: 1.58, premium: 2.29 },
            "coffee": { house: 5.39, premium: 7.82 },
            "tea": { house: 2.45, premium: 3.55 },
            "sugar": { house: 1.28 },
            "flour": { house: 0.98 },
            "oil": { house: 3.75, premium: 5.44 },
            "salt": { house: 0.88 },
            "pepper": { house: 2.15, premium: 3.12 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Intermarché",
        type: "traditional",
        products: {
            "milk": { house: 0.90, premium: 1.3 },
            "bread": { house: 1.20, premium: 1.74 },
            "eggs": { house: 2.50, premium: 3.62 },
            "butter": { house: 2.30, premium: 3.33 },
            "cheese": { house: 4.00, premium: 5.8 },
            "chicken": { house: 6.00, premium: 8.7 },
            "apples": { house: 1.80, premium: 2.61 },
            "bananas": { house: 1.30, premium: 1.89 },
            "tomatoes": { house: 2.20, premium: 3.19 },
            "potatoes": { house: 2.00, premium: 2.9 },
            "rice": { house: 2.50, premium: 3.62 },
            "pasta": { house: 1.00, premium: 1.45 },
            "yogurt": { house: 1.50, premium: 2.17 },
            "coffee": { house: 5.00, premium: 7.25 },
            "tea": { house: 2.30, premium: 3.33 },
            "sugar": { house: 1.20 },
            "flour": { house: 0.90 },
            "oil": { house: 3.50, premium: 5.08 },
            "salt": { house: 0.80 },
            "pepper": { house: 2.00, premium: 2.9 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Spar",
        type: "traditional",
        products: {
            "milk": { house: 0.97, premium: 1.41 },
            "bread": { house: 1.39, premium: 2.02 },
            "eggs": { house: 2.85, premium: 4.13 },
            "butter": { house: 2.65, premium: 3.84 },
            "cheese": { house: 4.55, premium: 6.6 },
            "chicken": { house: 6.85, premium: 9.93 },
            "apples": { house: 2.15, premium: 3.12 },
            "bananas": { house: 1.52, premium: 2.2 },
            "tomatoes": { house: 2.55, premium: 3.7 },
            "potatoes": { house: 2.35, premium: 3.41 },
            "rice": { house: 2.85, premium: 4.13 },
            "pasta": { house: 1.19, premium: 1.73 },
            "yogurt": { house: 1.75, premium: 2.54 },
            "coffee": { house: 5.85, premium: 8.48 },
            "tea": { house: 2.65, premium: 3.84 },
            "sugar": { house: 1.39 },
            "flour": { house: 1.09 },
            "oil": { house: 3.95, premium: 5.73 },
            "salt": { house: 0.99 },
            "pepper": { house: 2.35, premium: 3.41 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Bio-Planet",
        type: "organic",
        products: {
            "milk": { house: 1.49, premium: 2.16 },
            "bread": { house: 2.29, premium: 3.32 },
            "eggs": { house: 4.29, premium: 6.22 },
            "butter": { house: 3.99, premium: 5.79 },
            "cheese": { house: 6.49, premium: 9.41 },
            "chicken": { house: 9.99, premium: 14.49 },
            "apples": { house: 2.99, premium: 4.34 },
            "bananas": { house: 2.19, premium: 3.18 },
            "tomatoes": { house: 3.49, premium: 5.06 },
            "potatoes": { house: 2.99, premium: 4.34 },
            "rice": { house: 3.99, premium: 5.79 },
            "pasta": { house: 1.99, premium: 2.89 },
            "yogurt": { house: 2.49, premium: 3.61 },
            "coffee": { house: 8.99, premium: 13.04 },
            "tea": { house: 4.49, premium: 6.51 },
            "sugar": { house: 2.29 },
            "flour": { house: 1.79 },
            "oil": { house: 5.99, premium: 8.69 },
            "salt": { house: 1.49 },
            "pepper": { house: 3.99, premium: 5.79 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "OKay",
        type: "discount",
        products: {
            "milk": { house: 0.85, premium: 1.23 },
            "bread": { house: 1.15, premium: 1.67 },
            "eggs": { house: 2.39, premium: 3.47 },
            "butter": { house: 2.15, premium: 3.12 },
            "cheese": { house: 3.69, premium: 5.35 },
            "chicken": { house: 5.79, premium: 8.4 },
            "apples": { house: 1.69, premium: 2.45 },
            "bananas": { house: 1.25, premium: 1.81 },
            "tomatoes": { house: 2.09, premium: 3.03 },
            "potatoes": { house: 1.89, premium: 2.74 },
            "rice": { house: 2.39, premium: 3.47 },
            "pasta": { house: 0.92, premium: 1.33 },
            "yogurt": { house: 1.39, premium: 2.02 },
            "coffee": { house: 4.79, premium: 6.95 },
            "tea": { house: 2.15, premium: 3.12 },
            "sugar": { house: 1.09 },
            "flour": { house: 0.82 },
            "oil": { house: 3.39, premium: 4.92 },
            "salt": { house: 0.72 },
            "pepper": { house: 1.89, premium: 2.74 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Cru",
        type: "specialty",
        products: {
            "milk": { house: 1.29, premium: 1.87 },
            "bread": { house: 1.99, premium: 2.89 },
            "eggs": { house: 3.79, premium: 5.5 },
            "butter": { house: 3.49, premium: 5.06 },
            "cheese": { house: 5.99, premium: 8.69 },
            "chicken": { house: 8.99, premium: 13.04 },
            "apples": { house: 2.69, premium: 3.9 },
            "bananas": { house: 1.89, premium: 2.74 },
            "tomatoes": { house: 3.19, premium: 4.63 },
            "potatoes": { house: 2.69, premium: 3.9 },
            "rice": { house: 3.49, premium: 5.06 },
            "pasta": { house: 1.69, premium: 2.45 },
            "yogurt": { house: 2.19, premium: 3.18 },
            "coffee": { house: 7.99, premium: 11.59 },
            "tea": { house: 3.99, premium: 5.79 },
            "sugar": { house: 1.99 },
            "flour": { house: 1.49 },
            "oil": { house: 5.49, premium: 7.96 },
            "salt": { house: 1.29 },
            "pepper": { house: 3.49, premium: 5.06 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Rayon",
        type: "online",
        products: {
            "milk": { house: 0.96, premium: 1.39 },
            "bread": { house: 1.32, premium: 1.91 },
            "eggs": { house: 2.72, premium: 3.94 },
            "butter": { house: 2.52, premium: 3.65 },
            "cheese": { house: 4.32, premium: 6.26 },
            "chicken": { house: 6.52, premium: 9.45 },
            "apples": { house: 2.02, premium: 2.93 },
            "bananas": { house: 1.48, premium: 2.15 },
            "tomatoes": { house: 2.42, premium: 3.51 },
            "potatoes": { house: 2.22, premium: 3.22 },
            "rice": { house: 2.72, premium: 3.94 },
            "pasta": { house: 1.12, premium: 1.62 },
            "yogurt": { house: 1.62, premium: 2.35 },
            "coffee": { house: 5.52, premium: 8.0 },
            "tea": { house: 2.52, premium: 3.65 },
            "sugar": { house: 1.32 },
            "flour": { house: 1.02 },
            "oil": { house: 3.82, premium: 5.54 },
            "salt": { house: 0.92 },
            "pepper": { house: 2.22, premium: 3.22 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Crisp",
        type: "online",
        products: {
            "milk": { house: 1.05, premium: 1.52 },
            "bread": { house: 1.49, premium: 2.16 },
            "eggs": { house: 2.99, premium: 4.34 },
            "butter": { house: 2.79, premium: 4.05 },
            "cheese": { house: 4.79, premium: 6.95 },
            "chicken": { house: 7.29, premium: 10.57 },
            "apples": { house: 2.29, premium: 3.32 },
            "bananas": { house: 1.69, premium: 2.45 },
            "tomatoes": { house: 2.79, premium: 4.05 },
            "potatoes": { house: 2.49, premium: 3.61 },
            "rice": { house: 2.99, premium: 4.34 },
            "pasta": { house: 1.29, premium: 1.87 },
            "yogurt": { house: 1.89, premium: 2.74 },
            "coffee": { house: 6.29, premium: 9.12 },
            "tea": { house: 2.89, premium: 4.19 },
            "sugar": { house: 1.49 },
            "flour": { house: 1.19 },
            "oil": { house: 4.19, premium: 6.08 },
            "salt": { house: 1.09 },
            "pepper": { house: 2.49, premium: 3.61 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Ochama",
        type: "online",
        products: {
            "milk": { house: 0.88, premium: 1.28 },
            "bread": { house: 1.18, premium: 1.71 },
            "eggs": { house: 2.48, premium: 3.6 },
            "butter": { house: 2.28, premium: 3.31 },
            "cheese": { house: 3.98, premium: 5.77 },
            "chicken": { house: 5.98, premium: 8.67 },
            "apples": { house: 1.78, premium: 2.58 },
            "bananas": { house: 1.28, premium: 1.86 },
            "tomatoes": { house: 2.18, premium: 3.16 },
            "potatoes": { house: 1.98, premium: 2.87 },
            "rice": { house: 2.48, premium: 3.6 },
            "pasta": { house: 0.98, premium: 1.42 },
            "yogurt": { house: 1.48, premium: 2.15 },
            "coffee": { house: 4.98, premium: 7.22 },
            "tea": { house: 2.28, premium: 3.31 },
            "sugar": { house: 1.18 },
            "flour": { house: 0.88 },
            "oil": { house: 3.48, premium: 5.05 },
            "salt": { house: 0.78 },
            "pepper": { house: 1.98, premium: 2.87 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Kazidomi",
        type: "online-organic",
        products: {
            "milk": { house: 1.39, premium: 2.02 },
            "bread": { house: 2.19, premium: 3.18 },
            "eggs": { house: 4.09, premium: 5.93 },
            "butter": { house: 3.79, premium: 5.5 },
            "cheese": { house: 6.19, premium: 8.98 },
            "chicken": { house: 9.49, premium: 13.76 },
            "apples": { house: 2.79, premium: 4.05 },
            "bananas": { house: 2.09, premium: 3.03 },
            "tomatoes": { house: 3.29, premium: 4.77 },
            "potatoes": { house: 2.79, premium: 4.05 },
            "rice": { house: 3.79, premium: 5.5 },
            "pasta": { house: 1.89, premium: 2.74 },
            "yogurt": { house: 2.39, premium: 3.47 },
            "coffee": { house: 8.49, premium: 12.31 },
            "tea": { house: 4.29, premium: 6.22 },
            "sugar": { house: 2.19 },
            "flour": { house: 1.69 },
            "oil": { house: 5.79, premium: 8.4 },
            "salt": { house: 1.39 },
            "pepper": { house: 3.79, premium: 5.5 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    },
    {
        name: "Uber Eats (Supermarket)",
        type: "quick-commerce",
        products: {
            "milk": { house: 1.19, premium: 1.73 },
            "bread": { house: 1.69, premium: 2.45 },
            "eggs": { house: 3.29, premium: 4.77 },
            "butter": { house: 2.99, premium: 4.34 },
            "cheese": { house: 5.09, premium: 7.38 },
            "chicken": { house: 7.79, premium: 11.3 },
            "apples": { house: 2.49, premium: 3.61 },
            "bananas": { house: 1.89, premium: 2.74 },
            "tomatoes": { house: 2.99, premium: 4.34 },
            "potatoes": { house: 2.69, premium: 3.9 },
            "rice": { house: 3.19, premium: 4.63 },
            "pasta": { house: 1.49, premium: 2.16 },
            "yogurt": { house: 2.09, premium: 3.03 },
            "coffee": { house: 6.79, premium: 9.85 },
            "tea": { house: 3.09, premium: 4.48 },
            "sugar": { house: 1.69 },
            "flour": { house: 1.39 },
            "oil": { house: 4.49, premium: 6.51 },
            "salt": { house: 1.19 },
            "pepper": { house: 2.69, premium: 3.9 }
        }
    },
    {
        name: "Deliveroo (Supermarket)",
        type: "quick-commerce",
        products: {
            "milk": { house: 1.15, premium: 1.67 },
            "bread": { house: 1.65, premium: 2.39 },
            "eggs": { house: 3.19, premium: 4.63 },
            "butter": { house: 2.89, premium: 4.19 },
            "cheese": { house: 4.99, premium: 7.24 },
            "chicken": { house: 7.59, premium: 11.01 },
            "apples": { house: 2.39, premium: 3.47 },
            "bananas": { house: 1.79, premium: 2.6 },
            "tomatoes": { house: 2.89, premium: 4.19 },
            "potatoes": { house: 2.59, premium: 3.76 },
            "rice": { house: 3.09, premium: 4.48 },
            "pasta": { house: 1.45, premium: 2.1 },
            "yogurt": { house: 1.99, premium: 2.89 },
            "coffee": { house: 6.59, premium: 9.56 },
            "tea": { house: 2.99, premium: 4.34 },
            "sugar": { house: 1.65 },
            "flour": { house: 1.35 },
            "oil": { house: 4.39, premium: 6.37 },
            "salt": { house: 1.15 },
            "pepper": { house: 2.59, premium: 3.76 }
        }
    },
    {
        name: "Flink",
        type: "quick-commerce",
        products: {
            "milk": { house: 1.09, premium: 1.58 },
            "bread": { house: 1.55, premium: 2.25 },
            "eggs": { house: 3.05, premium: 4.42 },
            "butter": { house: 2.75, premium: 3.99 },
            "cheese": { house: 4.85, premium: 7.03 },
            "chicken": { house: 7.35, premium: 10.66 },
            "apples": { house: 2.25, premium: 3.26 },
            "bananas": { house: 1.65, premium: 2.39 },
            "tomatoes": { house: 2.75, premium: 3.99 },
            "potatoes": { house: 2.45, premium: 3.55 },
            "rice": { house: 2.95, premium: 4.28 },
            "pasta": { house: 1.35, premium: 1.96 },
            "yogurt": { house: 1.85, premium: 2.68 },
            "coffee": { house: 6.35, premium: 9.21 },
            "tea": { house: 2.85, premium: 4.13 },
            "sugar": { house: 1.55 },
            "flour": { house: 1.25 },
            "oil": { house: 4.25, premium: 6.16 },
            "salt": { house: 1.05 },
            "pepper": { house: 2.45, premium: 3.55 }
        ,
            "cornflakes": { house: 2.49, premium: 3.99 },
            "muesli": { house: 3.29, premium: 4.99 }
        }
    }
];
