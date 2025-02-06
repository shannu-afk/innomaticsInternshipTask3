const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shippingCost = 0;

    // Apply discount based on order amount
    if (orderAmount > 1000) {
        discount = 0.20; // 20% discount
    } else if (orderAmount >= 500 && orderAmount <= 1000) {
        discount = 0.10; // 10% discount
    }

    // Calculate discounted price
    let discountedPrice = orderAmount - (orderAmount * discount);

    // Apply shipping charges
    if (discountedPrice < 50) {
        shippingCost = 10; // Express shipping for orders below $50
    }

    // Final payable amount
    let finalAmount = discountedPrice + shippingCost;

    return `Final Payable Amount: $${finalAmount.toFixed(2)}`;
}

// Prompt the user for input
rl.question('Enter your order amount: ', (input) => {
    let orderAmount = parseFloat(input);

    // Validate input and calculate final amount
    if (!isNaN(orderAmount) && orderAmount >= 0) {
        console.log(calculateFinalAmount(orderAmount));
    } else {
        console.log("Please enter a valid order amount.");
    }

    // Close the readline interface
    rl.close();
});