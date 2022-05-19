


class Player {
    constructor(name, totalCoins, status, hasStar, gameOn){
        this.name = name;                   //String
        this.totalCoins = totalCoins;       //Number
        this.status = status;               //String - Powered Up Big Small Dead
        this.hasStar = hasStar;
        this.gameOn = gameOn;             //Boolean - Is star active?
    }

    setName = (namePicked) => {
        if (namePicked === 'Mario') {
            this.name = "Mario"
        } else if (namePicked === 'Luigi') {
            this.name = "Luigi"
        } else {
            this.name === `Lumpy Toast: 'PICK A NAME ALREADY, SOME OF US DON'T HAVE LEGS'`
        }
    }
    
    gotHit = () => {
        console.log('A Really cute fat Panda WAS HIT, I M A G I N E LOLOLOL')
        if(this.status === 'Powered Up'){
            this.status = 'Big';
        } else if(this.status === 'Big'){
            this.status = 'Small';
        } else if(this.status === 'Small'){
            this.status = 'Dead';
        }
    }               
    gotPowerup = () => {
        console.log('WE ARE ALL JUICED UP BRO')
        if(this.status === 'Small'){
            this.status = 'Big';
        } else if(this.status === 'Big'){
            this.status = 'Powered Up';
        } else if(this.status === 'Powered Up'){
            this.hasStar = true;
        }
    }       
    addCoin = () => {
        console.log('CHA CHING BABY, TIME TO HIT THE SLOTS!')
        this.totalCoins++;
    }           
    print = () => {
        console.log(`${this.name} has ${this.totalCoins} coins and is ${this.status} Star: ${this.hasStar} `)
    }
    
    
}
const playerOne = new Player('A Really cute fat Panda', 0, 'Big', false, true)
const gate = setInterval(() => {
        const randomRange = Math.floor(Math.random() * 3);
            if(randomRange === 0){
            playerOne.gotHit();
        } else if (randomRange === 1){
            playerOne.gotPowerup();
        } else if (randomRange === 2){
            playerOne.addCoin();
        } 
            if (playerOne.gameOn === false || playerOne.status === 'Dead') {
        clearInterval(gate);
        }
    playerOne.print();
    }, 1000);