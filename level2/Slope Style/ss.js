// use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(...args) {
//     return [args]
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "chicken", "fish", "TACOSSSS"));

//Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

// const combineFruit = (fruit, sweets, vegetables) => {
//     return `fruit: ${fruit}  sweets: ${sweets} vegetables: ${vegetables}`
// }

// console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]));
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }

//Use destructuring to use the property names as variables. Desructure the object in the parameter:

// function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
// }

// console.log(parseSentence({location: "Burly Idaho", duration: "2 weeks"}));

//Use array destructuring to make this code ES6:

//function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }


// function returnFirst({items}){
//     return items;
// }

//Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites({firstFav, secondFav, thirdFav}){
//     return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
// }

// console.log(returnFavorites({firstFav: "snowboarding", secondFav: "eating", thirdFav: "magnets"}));
//Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals) {
//     return [...realAnimals , ...magicalAnimals , ...mysteriousAnimals]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

//Try to make the following function more ES6y:
// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];

//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }
//                  shrunk
// const numbers = [68, 71, 419, 421, 421];
// function product(numbers) {
    

//     return numbers.reduce((total, num) => {
//       return total * num;
//     }, 1)
// }
// console.log(product(numbers));
//          shrunk some more
// const numbers = [68, 71, 419, 421, 421];
// const product = (narr) => {
    

//     return narr.reduce((total, num) => {
//       return total * num;
//     }, 1)
// }
// console.log(product(numbers));
//      shrunk again

// const numbers = [68, 71, 419, 421, 1776];
// const product = (narr) => {return narr.reduce((total, num) => {return total * num}, 1)};
// console.log(product(numbers));

//Make the following function more ES6y. Use at least both the rest and spread operators:

// const unshift = (array, ...fish) => {
//     const fish = [a, b, c, d, e]
//     return [...fish, ...array];
// }

//Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
// working
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         return `firstName: ${name[0]}, lastName: ${name[1]}`
//     })
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));

// shrink
// const populatePeople = (names) => {
//     return names.map((name) => {name = name.split(" ");
//         return `firstName: ${name[0]}, lastName: ${name[1]}`
//     })
// }
// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));

//shrink again

// const populatePeople = (names) => {return names.map((name) => {name = name.split(" ");
        // return `firstName: ${name[0]}, lastName: ${name[1]}`})}
// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));

// const populatePeople = ({names: ["Frank Peterson", "Suzy Degual", "Liza Jones"]})=> {
//     return arr.map((arr) => {
//         arr = arr.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]