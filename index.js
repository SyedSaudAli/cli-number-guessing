#! /usr/bin/env node
import inquirer from "inquirer";
const ramdonNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "Please enter you guess number between 1 to 6:",
    },
]);
if (answers.UserGuessNumber === ramdonNumber) {
    console.log("Congratulations! you`r right guessed number");
}
else {
    console.log("Sorry you`r wrong gussed number");
}
