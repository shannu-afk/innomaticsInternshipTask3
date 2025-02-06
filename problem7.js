const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function applyCoupon(orderAmount, couponCode) {
    let finalPrice = orderAmount;

    // Check for valid coupon codes
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        // Apply 10% discount
        finalPrice = orderAmount * 0.90; // 10% off
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        // Free shipping does not change the order amount
        finalPrice = orderAmount; // No discount on the price
    } else if (couponCode) {
        // Invalid coupon code or conditions not met
        return "Invalid coupon code or conditions not met.";
    }

    return `Final Price: $${finalPrice.toFixed(2)}`;
}

// Prompt the user for input
rl.question('Enter your order amount: ', (orderAmountInput) => {
    rl.question('Enter your coupon code: ', (couponCodeInput) => {
        let orderAmount = parseFloat(orderAmountInput);

        // Validate input and calculate final price
        if (!isNaN(orderAmount) && orderAmount >= 0) {
            console.log(applyCoupon(orderAmount, couponCodeInput.trim())); // Trim to remove extra spaces
        } else {
            console.log("Please enter a valid order amount.");
        }

        // Close the readline interface
        rl.close();
    });
});