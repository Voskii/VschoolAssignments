

class Player {
    constructor (name, totalCoins, status, hasStar, setName, gotHit, gotPowerup, addCoin, print){
        this.name = name;                   //String
        this.totalCoins = totalCoins;       //Number
        this.status = status;               //String - Powered Up Big Small Dead
        this.hasStar = hasStar;             //Boolean - Is star active?
        this.setName = (namePicked) => {
            this.name = namePicked;
        };                                  
        gotHit = () => {
            if(status === 'Powered Up'){
                status = 'Big';
            } else if(status === 'Big'){
                status = 'Small';
            } else if(status === 'Small'){
                status = 'Dead'
            } else {
            }
        };               
        gotPowerup = () => {
            if(status === 'Small'){
                status = 'Big';
            } else if(status === 'Big'){
                status = 'Powered Up';
            } else if(status === 'Powered Up'){
                hasStar = true;
            }
        };       
        addCoin = () => {
            totalCoins++;
        };             
        print = () => {
            console.log(name, totalCoins, status, hasStar)
        };                 
    }
}

const randomRange = () => {
    const numArr = [0, 1, 2];
    return Math.floor(Math.random() * numArr.length);
}

setInterval(randomRange, 1000);
const playerOne = new Player('Mario', 0, 'Big', false);

if(randomRange === 0){
    playerOne.gotHit();
} else if (randomRange === 1){
    playerOne.gotPowerup();
} else if (randomRange === 2){
    playerOne.addCoin();
}