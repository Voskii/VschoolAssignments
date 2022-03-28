//
// let intVal = 0
// let numbArr = [3, 5, 2, 8, 1];
// let reducer = (accumulator, item) => {
//     console.log(accumulator + item);
//     return accumulator + item;
// }
// let total = numbArr.reduce(reducer, intVal);
// function findBigNum();
// for(let myArrIndex = 0; myArrIndex < myArr.length; myArrIndex++){
//     for(){
//     }
// }
// for(i = 3; i < numbArr.length; i++){
    //     for(let j = numbArrIndex; j < numbArr.length; j++){
    //         console.log(j);
    //     }
    // }
// #1 
// let numbArr = [3, 5, 2, 8, 1];
//     numbArr.sort();
//     console.log(numbArr[4]);
// #2
let myArr = ["#3", "$$$", "C%4!", "Hey!"]
function letterWithStrings(array, char){
    let newArr = [];
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            if(array[i][j] === char){
                newArr.push(array[i]);
                break;
            }
        }
    }
    
    return newArr;
}

letterWithStrings(myArr, "!");
console.log(letterWithStrings(myArr, "!"));
console.log(letterWithStrings(["#3", "$$$", "C%4$$", "Hey!"], "$"));
// #3
// let numb1 = "11";
// let numb2 = "5";
// let rem = numb1 % numb2;
// function sumOf (num, num2){
//     if( rem === 0){
//         console.log(num + " is divisble by " + num2);
//     } else {
//         console.log(num + " is not divisble by " + num2);
//     }
// }
// sumOf(numb1, numb2);