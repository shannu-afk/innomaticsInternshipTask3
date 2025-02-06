const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isEligibleForJob(age, experience, qualification) {
    // Define valid qualifications
    const validQualifications = ["Bachelor's Degree", "B.Tech", "BSc", "BA", "B.Com"];

    // Check eligibility criteria
    if (age >= 21 && age <= 55 && experience >= 2 && validQualifications.includes(qualification)) {
        return "Eligible for the job.";
    } else {
        return "Not eligible for the job.";
    }
}

// Prompt the user for input
rl.question('Enter your age: ', (ageInput) => {
    rl.question('Enter your years of experience: ', (experienceInput) => {
        rl.question('Enter your qualification: ', (qualificationInput) => {
            let age = parseInt(ageInput);
            let experience = parseInt(experienceInput);
            let qualification = qualificationInput.trim(); // Remove any extra spaces

            // Validate input and check eligibility
            if (!isNaN(age) && !isNaN(experience) && age >= 0 && experience >= 0) {
                console.log(isEligibleForJob(age, experience, qualification));
            } else {
                console.log("Please enter valid age and experience.");
            }

            // Close the readline interface
            rl.close();
        });
    });
});