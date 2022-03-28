// HEY! LETS GO BROTHER!! //
const readline = require("readline-sync");
    console.log("You just woke up on a cliff edge overlooking a vast valley full of canyons, waterfalls, lakes, forest, and loud beast howls. You see this floating head with a really great hair line. Like, it's just so great and thick and long. No reason for anyone to pick fun at this amazing hair line");
const userName = readline.question("'What ya mum scream at you to get your attention?' the floating head questioned: ")
    console.log("Well " + userName + ", we're fu@$ed :). My name is Lumpy Toast and I smelled ya from a far so I thought I would see wth it was. I'll help you around since you seem lost. We should look for a giant f%^in leaf or something for shelter. I'm not taking you back to my place. My wife 'smooth Toast', wouldn't like you're smelly a%#")
    readline.keyInPause();
    console.log("Heavy Breathing");
    readline.keyInPause();
let health = Number(100);
const beatIt = "Let's beat it already, you need a shower 'Push w'";
    console.log(beatIt);
let whatsBag = [""]


while (health > 0){
const whatsApp = readline.question(" Push 'w' to walk, Push 'i' for inventory: ")
    if(whatsApp === "w"){
        console.log("wow, some of us don't have legs a%&hole...we couldn't maybe just float? But okay, let's 'move' or whatever")
        readline.keyInPause();
        walk();
    } else if(whatsApp === "i"){
        checkBag();
    }
}

while (health <= 0){
    console.log("WOAHHHHH.....well...okay so you are dead. I figured you would die, I can't wait to tell Smooth Toast we have dinnah!");
    break;
}

function walk(){
let chance = Math.random()
console.log("You hear that?");
    while (chance < 0.25){
        woahBro();
        break;
    } 
}

function woahBro(health){
let goalDiggers = ["BOSS CAPTAIN CASSIE", "BOSS JACOB 'THE PEACEKEEPER'", "BOSS Ty Rex"];
let bossToFight = Math.floor(Math.random()*goalDiggers.length);
    if(bossToFight === 0){
        console.log("CAPTAIN CASSIE HAS APPEARED");
        capCas(health, bossToFight);
        return;
    } else if (bossToFight === 1){
        console.log("JACOB 'THE PEACEKEEPER' HAS APPEARED")
        jacPK(health, bossToFight);
        return;
    } else {
        console.log("Ty Rex HAS APPEARED")
        tyRex(health, bossToFight);
        return;
    }
}

function capCas(hp, boss){
const maybeRun = readline.question(" Push 'r' to run away, Push 'f' GIVE'EM HELL: ")
    if(maybeRun === "r"){
        tryRunning();
    } else if(maybeRun === "f"){
        fightMe(hp, boss);
    } else {
        return maybeRun;
    }
}

function jacPK(hp, boss){
const maybeRun = readline.question(" Push 'r' to run away, Push 'f' GIVE'EM HELL: ")
    if(maybeRun === "r"){
        tryRunning();
    } else if(maybeRun === "f"){
        fightMe(hp, boss);
    } else {
        return maybeRun;
    }
}

function tyRex(hp, boss){
const maybeRun = readline.question(" Push 'r' to run away, Push 'f' GIVE'EM HELL: ")
    if(maybeRun === "r"){
        tryRunning(hp, boss);
    } else if(maybeRun === "f"){
        fightMe(hp, boss);
    } else {
        return maybeRun;
    }
}

function tryRunning(hp, boss){
let chance = Math.random();
    if(chance >= 0.5){
        console.log("Lumpy toast teleported you both to safety and made you sign a written agreement for promised labor in the near future 'Ya Schmuck'")
        return beatIt;
    } else if(chance < 0.5){
        console.log("Lumpy Toast watches you fall on your face like the standard victim in every single horror film ever made...essentially meaning you are going to fight lol")
        fightMe(hp, boss);
    }
}

function fightMe(health, bossToFight){
console.log(health, bossToFight);
readline.keyInPause();
    return beatIt;
}

function checkBag(){
    console.log(whatsBag);
    return;
}
// let goalDiggers = ["CAPTAIN CASSIE", "JACOB 'THE PEACEKEEPER'", "Ty Rex"]
