#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "firstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select One Of The Following Operations",
        type: "list",
        name: "operation",
        choices: ["Addition", "Multiplication", "Subtraction", "Division"],
    },
]);
//conditional statements
if (answer.operation === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Plz Select A Valid Operation");
}
