const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    const baseFare = 300; // Base fare
    let totalFare = baseFare;

    // Determine additional charges based on class type
    if (classType === 'business') {
        totalFare += 200; // Additional charge for business class
    } else if (classType === 'first') {
        totalFare += 500; // Additional charge for first class
    }

    // Calculate luggage charges
    if (luggageWeight > 20) {
        const extraWeight = luggageWeight - 20;
        const extraCharges = Math.ceil(extraWeight / 10) * 50; // $50 for every 10kg over 20kg
        totalFare += extraCharges;
    }

    // Apply discounts
    if (isStudent) {
        totalFare *= 0.85; // 15% discount for students
    } else if (isSenior) {
        totalFare *= 0.90; // 10% discount for seniors
    }

    return `Total Flight Fare: $${totalFare.toFixed(2)}`;
}

// Prompt the user for input
rl.question('Enter the class type (business, first, economy): ', (classTypeInput) => {
    rl.question('Enter the luggage weight (in kg): ', (luggageWeightInput) => {
        rl.question('Are you a student? (yes/no): ', (studentInput) => {
            rl.question('Are you a senior citizen? (yes/no): ', (seniorInput) => {
                let classType = classTypeInput.trim().toLowerCase();
                let luggageWeight = parseFloat(luggageWeightInput);
                let isStudent = studentInput.trim().toLowerCase() === 'yes';
                let isSenior = seniorInput.trim().toLowerCase() === 'yes';

                // Validate input and calculate the total fare
                if ((classType === 'business' || classType === 'first' || classType === 'economy') && !isNaN(luggageWeight) && luggageWeight >= 0) {
                    console.log(calculateFlightFare(classType, luggageWeight, isStudent, isSenior));
                } else {
                    console.log("Please enter valid inputs.");
                }

                // Close the readline interface
                rl.close();
            });
        });
    });
});