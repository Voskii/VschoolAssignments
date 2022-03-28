// HEY! LETS GO BROTHER!! //
const readline = require("readline-sync");
    console.log("You just woke up on a cliff edge overlooking a vast valley full of canyons, waterfalls, lakes, forest, and loud beast howls. You see this floating head with a really great hair line. Like, it's just so great and thick and long. No reason for anyone to pick fun at this amazing hair line");
const userName = readline.question("'What ya mum scream at you to get your attention?' the floating head questioned: ");
    console.log("Well " + userName + ", we're fu@$ed :). My name is Lumpy Toast and I smelled ya from a far so I thought I would see wth it was. I'll help you around since you seem lost. We should look for a giant f%^in leaf or something for shelter. I'm not taking you back to my place. My wife 'smooth Toast', wouldn't like you're smelly a%#")
    readline.keyInPause();
    console.log("Heavy Breathing");
    readline.keyInPause();
// let player = [{ name: userName, health: health} ]
let health = Number(350);
const beatIt = "Let's beat it already, you need a shower 'Push w'";
    console.log(beatIt);
let whatsBag = [];
let enemies = [{ name: 'CAPTAIN CASSIE', health: 150, item: 'the HIDDEN YouTube dislike button', min: 25, max: 35  } , { name: "JACOB 'THE PEACEKEEPER'", health: 150, item: 'order 66', min: 38, max: 42  } , { name: 'Ty Rex', health: 150, item: 'Unbreakable Will', min: 25, max: 35  } , { name: 'CAPTAIN CASSIE FADE', health: 280, item: "Snow White's Apple", min: 30, max: 50 } , { name: "JACOB 'THE PEACEKEEPER' FADE", health: 280, item: "Thanos' Gauntlet Snap", min: 50, max: 65 } , { name: 'Ty Rex FADE', health: 300, item: 'Breakable Will', min: 35, max: 50 }];

while (health > 0){
    const whatsApp = readline.question(" Push 'w' to walk, Push 'i' for inventory, Push 'p' for stats: ")
    // console.log(hasUw);
        if(whatsApp === "w"){
            console.log("wow, some of us don't have legs a%&hole...we couldn't maybe just float? But okay, let's 'move' or whatever")
            walk();
        } else if(whatsApp === "i"){
            checkBag();
        } else if(whatsApp === "p"){
            console.log("Lumpy Toast says you screamed " + userName +  " while sleeping. Assumed that was ya name. You have " + health + "HP" + " and you have " + whatsBag + " in your possession")
        }
    }
    
    function walk(){
    let chance = Math.random();
    console.log("MOVING");
        while (chance < 0.25){
            woahBro();
            break;
        } 
    }
    
    function woahBro(){
    let bossToFight = Math.floor(Math.random()*enemies.length);
        if(bossToFight === 0){
            tryRunning(enemies[bossToFight]);
            return;
        } else if (bossToFight === 1){
            tryRunning(enemies[bossToFight]);
            return;
        } else {
            tryRunning(enemies[bossToFight]);
            return;
        }
    }
    
    function bossFight(enemy){
    console.log(enemy)
    console.log(` You are fighting ${enemy.name} their health is ${enemy.health} and they have ${enemy.item}`);
    let bossHp = enemy.health;
    let bossName = enemy.name;
    let thisOne = enemies.indexOf(enemy)
    let unbW = 'Unbreakable Will';
    console.log("You have " + health + " HP");
    readline.keyInPause();
        while(bossHp > 0){
        let kekW = Math.floor(Math.random() * (enemy.max - enemy.min) + enemy.min);
        let kekW1 = Math.floor(Math.random() * (enemy.max - enemy.min) + enemy.min);
            console.log(userName + ' attacks for ' + kekW + 'HP LET IT RIP TATERCHIP!');
            bossHp -= kekW;
            console.log(enemy.name + " has " + bossHp + " hp left!");
            readline.keyInPause();
                if(bossHp < 1){
            console.log("YOU HAVE SLAIN " + bossName);
            console.log(" You pulled " + enemy.item + " out of " + enemy.name + "'s loot chest! Check your inventory!")
            whatsBag.push(enemy.item)
            health += 70;
            console.log("Lumpy Toast sucked out " + enemy.name + "'s life-force and restored you by 70hp! You're a juicy " + health + "HP")
            enemies.splice(thisOne, 1);
            return;
            }
            console.log(bossName + ' HITS FOR ' + kekW1);
            health -= kekW1;
            console.log("Your hp is now " + health);
            if(health < 0 && whatsBag.indexOf(unbW) !== -1){
                console.log("Ty Rex' Unbreakable Will doesn't run out of steam, +80HP");
                readline.keyInPause();
                console.log(bossName + " acknolwedges Ty Rex' aura and exits the fight!")
                health += 80;
                return;
            } if(health < 0){
                console.log("YOU DIED! Now go and complain to the Dev's on twitter about nerfs xD")
                console.log("Lumpy Toast - 'BAAAAAAAAAAAAABE BAAAAAAABE, SMOOTH TOAST I GOT US DUNNUH!!! AND IT'S GOT ALL OUR STUFF THOSE ANGRY BOSSES STOLE FROM US!'")
            return;
            }
        }
    }
    
    
    function tryRunning(enemy){
    let chance = Math.random();
    console.log(`enemy ${enemy.name} has appeared`);
    const maybeRun = readline.question(" Push 'r' to run away, Push 'f' GIVE'EM HELL: ")
        if (maybeRun === "r") {
            if(chance > 0.5){
                health -= Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min);
                console.log(enemy.name + ' swiped you. Your HP is now ' + health)
                console.log("Lumpy toast teleported you both to safety and made you sign a written agreement for promised labor in the near future 'Ya Schmuck'");
                readline.keyInPause();
                return
            }else if(chance < 0.5){
                console.log(enemy.name + " ATTACKS!")
                health -= Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min);
                console.log("Your hp is now " + health)
                readline.keyInPause();
                return bossFight(enemy);
            }
            }else if(maybeRun === "f"){
                return bossFight(enemy);
        }   else{
        
        }
    }
    function checkBag(){
        console.log(whatsBag);
        if(readline.keyInYN('Do you want to use a special totally non harmful item?')){
            console.log("push 'p' to exit inventory")
            useItem(enemies);
    }   else {
        console.log("'nah bro'")
    }
    }
    function useItem(enemArr){
    let ytDis = 'the HIDDEN YouTube dislike button';
    let ord66 = 'order 66';                          
    let unbW = 'Unbreakable Will';                 
    let snowWa = "Snow White's Apple";            
    let thanSnap = "Thanos' Gauntlet Snap";         
    let baWill = 'Breakable Will'; 
    
    
        if(whatsBag.indexOf(ytDis) !== -1){
        console.log("push 'y' for the HIDDEN YouTube dislike button ")
    }   if(whatsBag.indexOf(ord66) !== -1){
        console.log("push 'o' for order 66")
    }   if(whatsBag.indexOf(unbW) !== -1){
        console.log("push 'u' for the Unbreakable Will")
    }   if(whatsBag.indexOf(snowWa) !== -1){
        console.log("push 's' for the Snow White Apple")
    }   if(whatsBag.indexOf(thanSnap) !== -1){
        console.log("push 't' for the Thanos' Snap")
    }   if(whatsBag.indexOf(baWill) !== -1){
        console.log("push 'b' for the Breakable Will")
    }
    let userItem = readline.question("Lumpy Toast groans 'So what'll it be?: ");
    // let killThis = enemArr.indexOf(Math.floor(Math.random() * enemArr.length));
    let boss = Math.floor(Math.random() * enemArr.length);
    let deadBoss = []
    
    if(userItem === "y"){
        console.log("The YouTube dislike button is toxic AS FU$% and removes your pants from existence...'HAHA'");
        whatsBag.splice(whatsBag.indexOf(ytDis), 1);
    } else if(userItem === "o"){
        console.log("Order 66 executed"); 
        readline.keyInPause();
        
        console.log(Math.floor(Math.random() * enemArr.length));
        // console.log(killThis);
        
        enemArr.splice(boss, 1);
        // console.log('You one shot ' + fish.${name} + ' :o' );
        console.log(enemArr);
        whatsBag.splice(whatsBag.indexOf(ord66), 1);
    } else if(userItem === "u"){
        console.log("This is an unknown passive effect");
    } else if(userItem === "s"){
        console.log("You attempt to eat Snow White's Apple, lumpy toast says 'My brother in christ, no time for naps!'");
        whatsBag.splice(whatsBag.indexOf(snowWa), 1);
    } else if(userItem === "t"){
        console.log("You are a thicc " + health + "HP . You wrestle on Thanos' gauntlet and snap your fingers " + health * .50 + " ...you've lost half your HP")
        whatsBag.splice(whatsBag.indexOf(thanSnap), 1);
    } else if(userItem === "b" && whatsBag.indexOf(unbW) !== -1){
        console.log("Breakable will attempts to kill you but the passive effect from Unbreakable will takes your place. Both items withered away.")
        whatsBag.splice(baWill, 1);
        whatsBag.splice(whatsBag.indexOf(unbW), 1);
    }  else if(userItem === "b"){
        console.log("Breakable will stops your heart. ")
        console.log("Lumpy Toast - 'BAAAAAAAAAAAAABE BAAAAAAABE, SMOOTH TOAST I GOT US DUNNUH!!! AND IT'S GOT ALL OUR STUFF THOSE ANGRY BOSSES STOLE FROM US!'")
        return health -= 700;
    }  else if(userItem === "p"){
        return
    } 
}