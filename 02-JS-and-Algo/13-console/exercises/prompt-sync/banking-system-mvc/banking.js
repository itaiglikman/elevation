let currentBalance = 100;

function getBalance() {
    return currentBalance;
}

function deposit(amount) {
    // validation
    currentBalance += amount;
}

function withdraw(amount) {
    // validation
    currentBalance -= amount;
}

function isValidAmount(amount) {
    
}

module.exports = {
    withdraw, deposit, getBalance
}