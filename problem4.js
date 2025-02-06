const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function trafficLightControl(density) {
    let greenLightDuration;

    // Determine the duration of the green light based on traffic density
    switch (density.toLowerCase()) {
        case "heavy traffic":
            greenLightDuration = 60; // Green for 60 seconds
            break;
        case "moderate traffic":
            greenLightDuration = 40; // Green for 40 seconds
            break;
        case "light traffic":
            greenLightDuration = 20; // Green for 20 seconds
            break;
        default:
            return "Invalid traffic density. Please enter 'Heavy Traffic', 'Moderate Traffic', or 'Light Traffic'.";
    }

    return `Green light will stay on for ${greenLightDuration} seconds.`;
}

// Prompt the user for input
rl.question('Enter the traffic density (Heavy Traffic, Moderate Traffic, Light Traffic): ', (densityInput) => {
    console.log(trafficLightControl(densityInput));

    // Close the readline interface
    rl.close();
});