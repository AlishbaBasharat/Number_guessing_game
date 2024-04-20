#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { type: "number",
        name: "userguessnumber",
        message: "please guess a number between 1 to 6:",
    },
]);
if (answer.userguessnumbe === randomNumber) {
    console.log("Great! you guess correct number");
}
else {
    console.log("oh sorry! you guess wrong number");
}
