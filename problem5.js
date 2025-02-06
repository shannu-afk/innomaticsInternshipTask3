const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateTicketPrice(age, showTime) {
    const standardPrice = 12;
    let discount = 0;

    // Determine the discount based on age
    if (age < 12) {
        discount = 0.40; // 40% discount for children
    } else if (age > 60) {
        discount = 0.30; // 30% discount for senior citizens
    } else if (showTime < 17) { // Matinee show before 5 PM
        discount = 0.20; // 20% discount for matinee
    }

    // Calculate final price after discount
    const finalPrice = standardPrice * (1 - discount);
    return `Final Ticket Price: $${finalPrice.toFixed(2)}`;
}

// Prompt the user for input
rl.question('Enter your age: ', (ageInput) => {
    rl.question('Enter the show time (in 24-hour format, e.g., 14 for 2 PM): ', (showTimeInput) => {
        let age = parseInt(ageInput);
        let showTime = parseInt(showTimeInput);

        // Validate input and calculate final ticket price
        if (!isNaN(age) && !isNaN(showTime) && age >= 0 && showTime >= 0 && showTime <= 23) {
            console.log(calculateTicketPrice(age, showTime));
        } else {
            console.log("Please enter valid age and show time.");
        }

        // Close the readline interface
        rl.close();
    });
});