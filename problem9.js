const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateElectricityBill(units, timeOfDay) {
    let rate;
    let totalBill;

    // Determine the rate based on units consumed
    if (units < 100) {
        rate = 5; // $5 per unit
    } else if (units >= 100 && units <= 300) {
        rate = 4; // $4 per unit
    } else {
        rate = 3; // $3 per unit
    }

    // Calculate the total bill
    totalBill = units * rate;

    // Check if the time is during peak hours (8 PM - 8 AM)
    if (timeOfDay >= 20 || timeOfDay < 8) {
        totalBill *= 1.10; // Add 10% extra charge
    }

    return `Total Electricity Bill: $${totalBill.toFixed(2)}`;
}

// Prompt the user for input
rl.question('Enter the number of units consumed: ', (unitsInput) => {
    rl.question('Enter the time of day (in 24-hour format, e.g., 14 for 2 PM): ', (timeOfDayInput) => {
        let units = parseFloat(unitsInput);
        let timeOfDay = parseInt(timeOfDayInput);

        // Validate input and calculate the total bill
        if (!isNaN(units) && units >= 0 && !isNaN(timeOfDay) && timeOfDay >= 0 && timeOfDay < 24) {
            console.log(calculateElectricityBill(units, timeOfDay));
        } else {
            console.log("Please enter valid units and time of day.");
        }

        // Close the readline interface
        rl.close();
    });
});