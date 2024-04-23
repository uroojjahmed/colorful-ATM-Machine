#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 6000;
let myPin = 5555;
//print a welcome message
console.log(chalk.yellowBright("\n \t *** Welcome to Code with Urooj Ahmed -ATM MACHINE- *** \n"));
//Atm Machine
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.blue("Enter your pin code: ")
    }
]);
if (pinAns.pin === myPin) {
    console.log(chalk.greenBright("\nYour pin code is Correct!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["Withdraw", "Check balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawmethod",
                type: "list",
                message: "Please select a withdrawal method: ",
                choices: ["Fast Cash", "Enter your Amount"]
            }
        ]);
        if (withdrawAns.withdrawmethod === "Fast Cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: chalk.bgBlueBright("select your Amount: "),
                    choices: [500, 1000, 2000, 5000, 10000]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log(chalk.red("Insufficent Balance"));
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(chalk.green(`${fastcashAns.fastcash} withdraw successfully`));
                console.log(chalk.blue(`Your Remaining Balance is: ${myBalance}`));
            }
        }
        else if (withdrawAns.withdrawmethod === "Enter your amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Please enter your withdraw amount: "
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log(chalk.red("Insufficent Balance"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw successfully`);
                console.log(chalk.blue(`Your Remaining Balance is: ${myBalance}`));
            }
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(chalk.bgBlue(`Your current account balance is: ${myBalance} `));
    }
}
else {
    console.log(chalk.red("pin code is incorrect, Enter your correct pin!"));
}
