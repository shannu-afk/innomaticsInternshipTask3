const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade(marks, attendance) {
    // Add extra credit if attendance is above 90%
    if (attendance > 90) {
        marks += 5;
    }

    // Determine the grade based on marks
    let grade;
    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    return `Final Grade: ${grade}`;
}

// Prompt the user for input
rl.question('Enter the student\'s marks: ', (marksInput) => {
    rl.question('Enter the student\'s attendance percentage: ', (attendanceInput) => {
        let marks = parseFloat(marksInput);
        let attendance = parseFloat(attendanceInput);

        // Validate input and calculate final grade
        if (!isNaN(marks) && !isNaN(attendance) && marks >= 0 && attendance >= 0 && attendance <= 100) {
            console.log(calculateGrade(marks, attendance));
        } else {
            console.log("Please enter valid marks and attendance percentage.");
        }

        // Close the readline interface
        rl.close();
    });
});