// var name = "John"
// var age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// t1

// const carrots = ["bright orange", "ripe", "rotten"];

// const fish = (arr) => {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }
// console.log(fish(carrots));

// t2
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter((person) => {
//         return person.friendly
//     })
// }

// console.log(filterForFriendly(people));

//t3
// const doingMathSum = (a, b) =>  {
//     return a + b
// }

// const produceProduct = (a, b) => {
//     return a * b
// }

//t4

// const firstName = 'Kat';
// const lastName = 'Stark';
// const age = '40';
// const printThisB =  (fName, lName, lvl) => {
//     return `Hi ${fName} ${lName} , how does it feel to be ${lvl}`
// }
// console.log(printThisB(firstName, lastName, age));

//t5

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
// ];
// console.log(animals.filter((animal) => {if(animal.type === 'dog') return true} ));



// function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })
// }

// console.log(filterForDogs(animals) => {
//     arr.filter
// });

///THAT WAS SO AWESOME TO WRITE!!! I GOT THE LAST 2 THE FIRST TRY!

//Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
//Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

// const location = 'Hawaii';
// const namee = 'Janice';

// const fishTacos = (nomenclature, whereYouIsBeAtThough) => {
//     return `Hi ${nomenclature}! Welcome to ${whereYouIsBeAtThough} . I hope you enjoy your stay. Please ask the president of ${whereYouIsBeAtThough} if you need anything.`
// }
// console.log(fishTacos(namee, location));