//HEY LETS GO BROTHER//

let formm = document.myForm;
let smashButt = document.getElementById("smashMe");
let fish = document.getElementById("total");
let count = localStorage.getItem("count") || 0;
fish.innerHTML = "TOTAL " + count;
smashButt.addEventListener("click", (event) => {
    event.preventDefault();
    count++;
    console.log("we are in new click event");
    localStorage.setItem("count", count);
    fish.innerHTML = "TOTAL " + count;
})


// smashButt.addEventListener("click", (event) => {
//     event.preventDefault();
// // let taco = fish.innerHTML = "TOTAL " + count + " :)";    
//     localStorage.setItem("count", count);
// })

// fish.innerHTML = localStorage.getItem("count");

// while(count !== 0){
// console.log("I AM IN THIS FUNCTION, Lisa!");
// smashButt.addEventListener("click", (event) => {


// } 

// window.addEventListener(location.reload(), () => {
// })

// let track = myForm.smashed;
// console.log(track);
//     // track = 0;
// myForm.addEventListener("submit", addMe);

// // if (fish){
// //     track += 1;
// // }

// function addMe(event){

//     console.log("I am in addMe function")
//     event.preventDefault();
//     return track.value += 1;
// }