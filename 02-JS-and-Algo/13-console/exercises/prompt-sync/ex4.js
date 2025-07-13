/**
 * Exercise 4
Create a simple banking system with menu options.

Display menu: 1) Check Balance, 2) Deposit, 3) Withdraw, 4) Exit
Validate menu choices (only accept 1-4)
For deposit/withdraw: validate positive numbers only
Keep running until user chooses exit
Use any input method you prefer
Example:

=== Banking System ===
1) Check Balance
2) Deposit Money
3) Withdraw Money
4) Exit
Choose option (1-4): 2
Enter amount to deposit: $50
New balance: $150
 */

const promptSync = require('prompt-sync');
const prompt = promptSync();

class Bank {
    constructor() {
        this.balance = 100;
    }

    printBalance() {
        console.log("Your Balance is " + this.balance);
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const bank = new Bank();

const displayMenu = () => {
    console.log("====Banking System====");
    console.log("1) Balance");
    console.log("2) Deposit");
    console.log("3) Withdraw");
    console.log("4) Exit");
}

const choice = () => {
    return Number(prompt("Choose option (1-4):\n"))
}

const validateChoice = () => {
    displayMenu();
    let userChoice = choice();
    while (userChoice < 1 || userChoice > 4 || isNaN(userChoice)) {
        console.log("Please choose valid option:");
        userChoice = choice();
    }
    return userChoice;
}

let validChoice = validateChoice();
while (validChoice !== 4) {
    switch (validChoice) {
        case 1:
            bank.printBalance();
            break;
        case 2:
            let deposit = Number(prompt("insert the amount of deposit:\n"));
            console.log(deposit);
            if (isNaN(deposit) || deposit <= 0) deposit = Number(prompt("please insert a positive amount\n"));
            else {
                10
                bank.deposit(deposit);
                bank.printBalance();
            }
            break;
        case 3:
            let withdraw = Number(prompt("insert the amount to withdraw:\n"));
            if (isNaN(withdraw) || withdraw <= 0) withdraw = Number(prompt("please insert a positive amount\n"));
            else {
                bank.withdraw(withdraw);
                bank.printBalance();
            }
            break;

        default:
            break;
    }
    validChoice = validateChoice();
}

console.log("Thanks for being with us! see you next time.");