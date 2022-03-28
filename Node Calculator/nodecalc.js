var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your online alias? ");
    console.log("Welcome " + userName + "!");
var num1 = readlineSync.question("Please enter your first number: ");
var num2 = readlineSync.question("Please enter your second number: ");
var operations = ["add", "sub", "mul", "roll", "div"];
var Index = readlineSync.keyInSelect(operations, "What operation will you like to perform?");


function add(num1, num2){
    console.log(userName + ", the result is : " + (Number(num1) + Number(num2)));
}

function sub(num1, num2){
    console.log(userName + ", the result is : " + (Number(num1) - Number(num2)));
}

function mul(num1, num2){
    console.log(userName + ", the result is : " + (Number(num1) * Number(num2)));
}

function div(num1, num2){
    console.log(userName + ", the result is : " + (Number(num1) / Number(num2)));
}

function roll(){
    console.log(userName + ", I'm Never gonna give you up, Never gonna let you down, Never gonna run around and desert you, Never gonna make you cry , Never gonna say goodbye, Never gonna tell a lie and hurt you");
}

    if(Index === 0){
    add(num1, num2);
} else if(Index === 1){
    sub(num1, num2)
} else if(Index === 2){
    mul(num1, num2);
} else if(Index === 3){
    roll();
} else {
    div(num1, num2);
}
