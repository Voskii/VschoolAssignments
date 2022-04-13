//HEY LET'S GO BROTHER//
const readline = require("readline-sync");
let twoPnt = readline.question("Lumpy Toast says 'give me the number of two pointers, or some %$#*': ");
let threePnt = readline.question("Lumpy Toast says 'give me the number of three pointers, 'sometimes I stop to think and then forget to start again': ");

function scoreBoard(){
let twos = twoPnt * 2;
let threes = threePnt * 3;
let fish = twos + threes;
    console.log("Lumpy Toast says 'The MonSTARS scored' " + fish + " .They had " + twoPnt + " 2 pointers and " + threePnt + " 3 pointers. 'I missed the bid to be on the MonSTARS team because the Shamrock shake was back in McD's and someone smashed into me at an intersection >:O'")
}
scoreBoard();