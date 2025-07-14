const prompt = require('../node_modules/prompt-sync')();


function displayMenu() {
    console.log("====Banking System====");
    console.log("1) Balance");
    console.log("2) Deposit");
    console.log("3) Withdraw");
    console.log("4) Exit");
}

function getChoice() {
    //loop until input is valid
    let choice = prompt("choose option (1-4): ");
    return choice;
}

function displayBalance(balance) {
    console.log("your balance is "+balance);
}



module.exports = {
 displayMenu,
 getChoice,
 displayBalance,
}
