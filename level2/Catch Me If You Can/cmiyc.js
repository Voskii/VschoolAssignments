// 1a
// const val1 = 4
// const val2 = 'this is not a number bro'; 
// function sum(x, y){
//     try {
//         if(x !== Number(val1) || y !== Number(val2)){
//             throw "Hey that is not a NUMBER"
//         }
//         console.log('NUMBERS!!!')
//     }
//     catch(err){
//         console.log(err)
//     }
//     // console.log(x + y)
//     return x + y;
// }
// sum(val1, val2);
//1b
// const val1 = 4
// const val2 = 'this is not a number bro'; 
// function sum(x, y){
//     try {
//         if(x !== Number(val1) || y !== Number(val2)){
//             throw "Hey that is not a NUMBER"
//         }
//         console.log('NUMBERS!!!')
//     }
//     catch(err){
//         console.log(err)
//     }
//     return x + y;
// }
// sum('1', '2');
// 2a
var user = {username: "sam", password: "123abc"};
function login(username, password){
    try {
        if(username !== 'sam' || password !== '123abc'){
            throw 'bro, who are you? Calling your mama...'
        }
        console.log('Login Successful, HAVE THE DAY YOU DESERVE!')
    }
    catch(err){
        console.log(err)
    }
}
login(user.username, user.password);
//2b
// var user = {username: "sam", password: "willsmithslap"};
// function login(username, password){
//     try {
//         if(username !== 'sam' || password !== '123abc'){
//             throw 'bro, who are you? Calling your mama...'
//         }
//         console.log('Login Successful, HAVE THE DAY YOU DESERVE!')
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// login(user.username, user.password);