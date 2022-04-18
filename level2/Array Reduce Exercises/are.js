//1
// const myArr = [1,2,3];
// function total(arr){
// let result = arr.reduce(function(final, num){
//         final += num;
//         return final;
//     })
//     console.log(result);
// }
// total(myArr);
//2
let myArr = [1,2,3];
let fish = [];
function stringConcat(arr, fishArr){
let result = arr.reduce(function(final, num){
    fishArr.push(num);
    
    return final
    });
    console.log(result)
}
stringConcat(myArr, fish);