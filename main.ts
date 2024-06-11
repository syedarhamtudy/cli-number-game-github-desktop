#! /usr/bin/env node

import inquirer from "inquirer";

const number1 = Math.floor(Math.random()*10);

console.log("Number Guessing Game\n");

let answer = await inquirer.prompt([
  { message: "Enter Your Number Between 0 and 10\n", type: "number", name: "Number2" },
]);

if(answer.Number2 === number1){
    console.log("You Guessed The Correct Number.\n");
}
else if(answer.Number2 > 10 || answer.Number2 < 0){
    console.log("Please Enter a correct number.\n")
}
else{
    console.log("You Guessed The Wrong Number.\n");
}
console.log(`The Number was ${number1}.`);