//HEY LETS GO BROTHER//

let formm = document.myForm;
let smashButt = document.getElementById("smashMe");
let fish = document.getElementById("total");
let count = 0;
smashButt.addEventListener("click", (event) => {
    event.preventDefault();
    count++;
    fish.innerHTML = "TOTAL " + count 
let taco = fish.innerHTML = "TOTAL " + count + " :)";    
    localStorage.setItem("keyName", taco);

})

fish.innerHTML = localStorage.getItem("keyName");


// let formm = document.myForm;
// let smashButt = document.getElementById("smashMe");
// let fish = document.getElementById("total");
// let count = 0;
// smashButt.addEventListener("click", (event) => {
//     event.preventDefault();
//     count++;
//     fish.innerHTML = "TOTAL " + count 
// // let taco = fish.innerHTML = "TOTAL " + count + " :)";    
//     localStorage.setItem("keyName", count);
    
// })

// fish.innerHTML = localStorage.getItem("keyName");
// smashButt.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log("we are in new click event")
    
//     let newCount = localStorage.getItem("keyName");
    
//     newCount++;
// })
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