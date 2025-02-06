const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function atmWithdrawal(balance, pin) {
    rl.question("Enter your PIN: ", (enteredPin) => {
        if (parseInt(enteredPin) !== pin) {
            console.log("Incorrect PIN");
            rl.close();
            return;
        }

        rl.question("Enter the withdrawal amount: ", (amount) => {
            amount = parseInt(amount);

            if (amount > balance) {
                console.log("Insufficient Funds");
            } else if (amount % 100 !== 0) {
                console.log("Enter amount in multiples of 100");
            } else {
                balance -= amount;
                console.log(`Withdrawal successful! New balance: ${balance}`);
            }

            rl.close();
        });
    });
}

// Example usage
let initialBalance = 5000;
let correctPin = 1234;
atmWithdrawal(initialBalance, correctPin);
