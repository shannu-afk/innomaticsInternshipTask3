const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    let suggestedPlan;

    // Determine the best membership plan based on user preferences
    if (planType === "Basic") {
        suggestedPlan = "Basic Plan: $20/month - Only gym access.";
    } else if (planType === "Premium") {
        suggestedPlan = "Premium Plan: $50/month - Gym + Personal Trainer.";
    } else if (planType === "VIP") {
        suggestedPlan = "VIP Plan: $80/month - Gym + Trainer + Diet Plan.";
    } else {
        return "Invalid plan type. Please choose Basic, Premium, or VIP.";
    }

    // Check for additional services
    if (wantsTrainer && planType === "Basic") {
        suggestedPlan = "You might want to upgrade to the Premium Plan for a Personal Trainer.";
    } else if (wantsDietPlan && planType === "Basic") {
        suggestedPlan = "You might want to upgrade to the VIP Plan for a Diet Plan.";
    } else if (wantsTrainer && !wantsDietPlan && planType === "Premium") {
        suggestedPlan = "You are already on the Premium Plan with a Personal Trainer.";
    } else if (wantsDietPlan && planType === "VIP") {
        suggestedPlan = "You are already on the VIP Plan with a Diet Plan.";
    } else if (wantsTrainer && wantsDietPlan && planType === "Premium") {
        suggestedPlan = "You might want to upgrade to the VIP Plan for a Diet Plan.";
    }

    return suggestedPlan;
}

// Prompt the user for input
rl.question('Enter your preferred plan type (Basic, Premium, VIP): ', (planTypeInput) => {
    rl.question('Do you want a Personal Trainer? (yes/no): ', (trainerInput) => {
        rl.question('Do you want a Diet Plan? (yes/no): ', (dietPlanInput) => {
            let wantsTrainer = trainerInput.trim().toLowerCase() === "yes";
            let wantsDietPlan = dietPlanInput.trim().toLowerCase() === "yes";

            // Get the suggestion based on user input
            console.log(choosePlan(planTypeInput.trim(), wantsTrainer, wantsDietPlan));

            // Close the readline interface
            rl.close();
        });
    });
});