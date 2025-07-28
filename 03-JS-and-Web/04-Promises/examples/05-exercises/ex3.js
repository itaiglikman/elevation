/**
 * Exercise 3
Build a promise-based shopping cart system with inventory checking and payment processing.
 */
// Simulated inventory database
const inventory = {
    'laptop': { price: 999, stock: 5 },
    'mouse': { price: 25, stock: 10 },
    'keyboard': { price: 75, stock: 0 }, // Out of stock
    'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
    // TODO: Return a promise that:
    return new Promise((resolve, reject) => {
        // 1. Waits 500ms (simulating database check)
        setTimeout(() => {
            for (const item of items) {
                // 4. Rejects with specific item that's out of stock
                if (inventory[item].stock === 0) reject(new Error(`X item ${item} is missing`));
            }
            // 2. Checks if all items are in stock
            // 3. Resolves with items if all available
            resolve(items);
        }, 500);
    })
}

function calculateTotal(items) {
    // TODO: Return a promise that:
    return new Promise((resolve, reject) => {

        // 1. Waits 200ms
        setTimeout(() => {
            // 2. Calculates total price including 8% tax
            let subtotalPrice = 0;
            for (const item of items) {
                subtotalPrice += inventory[item].price;
            }
            const tax = subtotalPrice * 0.8;
            const totalPrice = subtotalPrice + tax;
            // 3. Resolves with { subtotal, tax, total }
            resolve({ subtotalPrice, tax, totalPrice });
            reject(new Error('X some error in calculateTotal'));
        }, 200);
    })
}

function processPayment(amount) {
    // TODO: Return a promise that:
    return new Promise((resolve, reject) => {

        // 1. Waits 1500ms (simulating payment processing)
        setTimeout(() => {
            // 2. 90% success rate
            // 4. Rejects with payment failure error
            if (Math.random() < 0.1) reject(new Error('X payment failed'));
            // 3. Resolves with { transactionId, amount, status: 'success' }
            resolve({ transactionId: 1, amount, status: 'success' })
        }, 100);
    })
}

function updateInventory(items) {
    // TODO: Return a promise that:
    return new Promise((resolve, reject) => {
        // 1. Waits 300ms
        setTimeout(() => {
            // 2. Reduces stock for each item
            for (const item of items) {
                if (inventory[item].stock > 0) inventory[item].stock -= 1;
            }
            // 3. Resolves with updated inventory status
            resolve(inventory);

        }, 300);

    })
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
    // TODO: Implement the complete checkout flow

    return new Promise((resolve, reject) => {
        checkInventory(itemNames)
            .then(items => {
                console.log(items);
                const availableItems = items;
                calculateTotal(availableItems)
                    .then(totals => processPayment(totals.totalPrice))
                    .then(() => updateInventory(availableItems))
                    .then(inventory => resolve(inventory))
                    .catch(err=>reject(err))
            }).catch(err => reject(err));
    })
}

// Test cases:
// checkout(['laptop', 'mouse'])           // Should succeed
//     .then(result => console.log('Order success:', result))
//     .catch(error => console.log('Order failed:', error.message));

// checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
//     .then(result => console.log('Order success:', result))
//     .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));
