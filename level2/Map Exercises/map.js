// let myArr = ["2", "5", "100"];

// function doubleNumbers(arr){
// let answer = arr.map(function(fish){
//     return fish * 2;
//     }) 
// console.log(answer);
// }

// doubleNumbers(myArr);
// console.log(doubleNumbers([2, 5, 100]));
// //  // [4, 10, 200]

// 2
// let myArr = [2, 5, 100];

// function stringItUp(arr){
// let taco = arr.map(function(fish){
//     return fish.toString();
//     })
// console.log(taco);
// }
// stringItUp(myArr);
// 3
let myArr = ["john", "JACOB", "jinGleHeimer", "schmidt"];
function capitalizeNames(arr){
let unCap = arr.map(function(fish){
    fish.toLowerCase() + fish[0].toUpperCase();
})

console.log(unCap);
return unCap;
}
capitalizeNames(myArr);
// prototype.toUpperCase();