// use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(...args) {
//     return [args]
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "chicken", "fish", "TACOSSSS"));

//Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

function combineFruit(fruit, ...fish){
    return `fruit: ${fruit} `
}

console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]));
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }

