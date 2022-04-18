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
// let myArr = ["john", "JACOB", "jinGleHeimer", "schmidt"];
// function capitalizeNames(arr){
//     let kekW = arr.map(function(fish){
//     let lulW = fish.toLowerCase();
//     let wow = lulW.slice([1]);
//     let upF = fish[0].toUpperCase();
//     let result = upF.concat(wow);
//         return result
// })
// console.log(kekW);

// }
// capitalizeNames(myArr);

//4

// arrayOfNames = [
// {
// name: "Angelina Jolie",
// age: 80
// },
// {
// name: "Eric Jones",
// age: 2
// },
// {
// name: "Paris Hilton",
// age: 5
// },
// {
// name: "Kayne West",
// age: 16
// },
// {
// name: "Bob Ziroll",
// age: 100
// }
// ];
// function namesOnly(arr){

//     let music = arr.map(function(fish){
//         let nnArr = [];
//             return nnArr.concat(fish.name);
//         })
//     console.log(music)
//     }
//     namesOnly(arrayOfNames);

//5

// arrayOfNames = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ];

// function makeStrings(arr){
// let okay = arr.map(function(fish){
//     let heyy = [];
//     if(fish.age >= 18){
//         return heyy.concat(fish.name + ' can go')
//     }
//     else {
//         return heyy.concat(fish.name + ' cannot go')
//     }
// })
//     console.log(okay)
// }
// makeStrings(arrayOfNames);

// 6

function readyToPutInTheDOM(arr){
let whatName = arr.map(function(fish){
    let hey = [];
    return hey.concat("<h1>" + fish.name + "</h1>")
})
let whatAge = arr.map(function(fish){
    let heyy = [];
    return heyy.concat("<h2>" + fish.age + "</h2>")
})
console.log(whatName.concat(whatAge))
}
// consider split slice splice
let peopleArr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
readyToPutInTheDOM(peopleArr);
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]

// function makeStrings(arr){
// let smiles = arr.map(function(fish){
// let actorAge = fish.age;
// let actorName = fish.name;
//     return actorAge + actorName;
// }) 
// console.log(smiles);
//     if(smiles.age >= 18){
//         let sure = [" can go"];
//         sure.concat(smiles.name);
//         console.log(sure);
// }
// }
// function namesOnly(arr){

// let music = arr.map(function(fish){
//     let nnArr = [];
//         return nnArr.concat(fish.name);
//     })
// console.log(music)
// }
// namesOnly(arrayOfNames);


// for(let f = 0; f < fish[1]; f++){
//             console.log("I am in the for loop");
//             fish[0].toUpperCase();
//             console.log(fish[0].toUpperCase());
//         }
//     })
// let lulW = kekW.map(function(taco){
// let chick = taco[0].toUpperCase()
//     return taco.splice(taco[0], taco[1], chick);
// })
// console.log(lulW);
// fish.toLowerCase().fish.map((chips) => {chips.toUpperCase()}))return kekW;};
// splice(upMe[0], upMe[1], upMe[0].toUpperCase()
// prototype.toUpperCase();
//  taco.splice(fish[0], fish[1]);
// function capitalizeNames(arr){

//     let kekW = arr.map(function(fish){
//     let newArr = []
//         newArr.push(fish.toLowerCase());
//         console.log(newArr);
//     let chips = newArr.map(function(upMe){
//     let newerArr = []
//         newerArr.push(upMe[0].toUpperCase());
//         console.log(newerArr);
//         })
        
//         return chips;
//     })
    
//     return kekW;
    
//     }