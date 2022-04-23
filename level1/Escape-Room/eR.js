const readline= require("readline-sync");
const name = readline.question("What is your name? ");
    console.log("Greetings, " + name + "!")
    readline.question("Are you well on this day? ");
    console.log("Welp, it's time to Die! Or not /shrug ");
    readline.keyInPause();
    console.log("Heavy Breathing");
    readline.keyInPause();
    console.log("You have found yourself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts their hand in the hole, they die. Side Note..You can't open the door unless you find the key first. You die if you put your hand in the hole :).");
var choices = ["Put hand in hole", "Find the key", "Open the door"];
var selectChoice = readline.keyInSelect(choices, "What choice are you making");
var hasKey = false;

while(hasKey === false){
    
    if(selectChoice === 0){
        console.log("YOU DIED");
        break;
        
}   else if(selectChoice === 1){
        console.log("Okay, you have the key!");   
        hasKey = true; 
    
}   else if(selectChoice === 2){    
        console.log("You don't have the key!");
        selectChoice = readline.keyInSelect(choices, "What choice are you making");
        
}   else {
        console.log("WOW, WAY TO QUIT");
        break;

    }

}

        
while(hasKey === true){
    selectChoice = readline.keyInSelect(choices, "What choice are you making");
    if(hasKey === true, selectChoice === 1){
        console.log("You already have the key..");
        
}   else if(selectChoice === 0){
        console.log("YOU DIED");
        break;
}   else {    
        console.log("YOU ESCAPED! Thank You for playing my game :)");
        break;
    }
}

