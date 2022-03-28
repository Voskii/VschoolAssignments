var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
// console.log(vegetables);

fruit.shift();
// console.log(fruit);

var fruitInd = fruit.indexOf("orange");
// console.log(fruitInd);

var fruitInd = fruit.indexOf("orange");
fruit.push(fruitInd);
// console.log(fruit);

for(i = 0; i < vegetables.length; i++){
    // console.log(vegetables.length);
    
    
}
vegetables.push(3);
// console.log(vegetables);
var food = fruit.concat(vegetables);
// console.log(food);

food.splice(4,2);
// console.log(food);

food.reverse();
console.log(food);

// splitFood = food.split()
// console.log(splitFood);

// console.log(food);
// var splitFood = food.split("");
// var revSF = splitFood.reverse();
// console.log(revSF);