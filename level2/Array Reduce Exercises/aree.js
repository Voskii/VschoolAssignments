// 1
// const myArr = [1,2,3];
// function total(arr){
// let result = arr.reduce(function(final, num){
//         final += num;
//         return final;
//     })
//     console.log(result);
// }
// total(myArr);
// 2
let myArr = [1,2,3];
let newArr = [];
function stringConcat(arr, nArr){
let result = arr.reduce(function(final, num){
    final.push(num);
    // final.join('');
    
    return final
    }, []);
    console.log(result.join(''));
    // console.log(result.replaceAll());zzzzzzzzzzzzz
}
stringConcat(myArr, newArr);
// }
// stringConcat(myArr, newArr);

// let myArr = [1,2,3];
// let fish = [];
// function stringConcat(arr, fishArr){
// let result = arr.reduce(function(final, num){
//     fishArr.push(num + '');
    
//     return final
//     });
//     console.log(fishArr)
// }
// stringConcat(myArr, fish);

//3
// let voters = [{name:'Bob' , age: 30, voted: true}, {name:'Jake' , age: 32, voted: true}, {name:'Kate' , age: 25, voted: false}, {name:'Sam' , age: 20, voted: false}, {name:'Phil' , age: 21, voted: true}, {name:'Ed' , age:55, voted:true}, {name:'Tami' , age: 54, voted:true}, {name: 'Mary', age: 31, voted: false}, {name: 'Becky', age: 43, voted: false}, {name: 'Joey', age: 41, voted: true}, {name: 'Jeff', age: 30, voted: true}, {name: 'Zack', age: 19, voted: false}];

// function totalVotes(arr) {
// let count = arr.reduce(function(final, hasVoted){
//         if(hasVoted.voted){
//             final++
//         }
//         return final
//     }, 0)
//     console.log(count);
// }
// totalVotes(voters);

//4
// var wishlist = [{ title: "Tesla Model S", price: 90000 }, { title: "4 carat diamond ring", price: 45000 }, { title: "Fancy hacky Sack", price: 5 }, { title: "Gold fidgit spinner", price: 2000 }, { title: "A second Tesla Model S", price: 90000 }];
// function shoppingSpree(arr){
// let result = arr.reduce(function(final, item){
//     return final + item.price
// }, 0)
//     console.log(result);
// }
// shoppingSpree(wishlist);

//5
// var arrays = [["1", "2", "3"], [true], [4, 5, 6]];
// function flatten(arr){
// let result = arr.reduce(function(final, arrayy){
//         return final + arrayy;
//     })
//     console.log(result);
// }
// flatten(arrays);

//6
// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age: 55, voted: true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// let statArr =  { youngVotes: 0, youngPeople: 0, midVotes: 0, midsPeople: 0, oldVotes: 0, oldsPeople: 0};

// function voterResults(arr, sArr) {
// let result = arr.reduce(function(final, fish){
//     if(fish.age >= 18 && fish.age <= 25){
//         if(fish.voted){
//             sArr.youngVotes++;
//             return sArr;
//         }
//         // console.log('i am in 18 to 25')
//         sArr.youngPeople++;
//         return final;
//     }
//     if(fish.age >= 26 && fish.age <= 35){
//         if(fish.voted){
//             sArr.midVotes++;
//             return sArr;
//         }
//         // console.log('i am in 26 to 35')
//         sArr.midsPeople++;
//         return sArr;
//     }
//     if(fish.age >= 36 && fish.age <= 55){
//         if(fish.voted){
//             sArr.oldVotes++;
//             return sArr;
//         }
//         // console.log('i am in 36 to 55')
//         sArr.oldsPeople++;
//         return sArr;
//     }
    
// }, 0)
// console.log(result);
// // console.log(sArr);
// }
// voterResults(voters, statArr);