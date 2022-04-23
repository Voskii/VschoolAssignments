var headR = document.getElementById("header");
headR.innerHTML += "<h2>JavaScript Made This!!</h2>"
headR.innerHTML += "<span class='name'>Kyle</span> wrote the JavaScript";
headR.style.textAlign = "center";
const clearButt = document.querySelector("#clearButt");
clearButt.addEventListener("click", clearP);


var messages = document.getElementsByClassName("message");
messages[0].textContent = "Let's talk about that hobby!";
messages[1].textContent = "Oh I quit playing Apex Legends for School!";
messages[2].textContent = "You probably smell great too right!?";
messages[3].textContent = "Only because I quit Apex Legends!";

var parentNode = document.getElementById("msgBox");
var fLeft = document.getElementById("firstLeft");
var fRight = document.getElementById("firstRight");
var sLeft = document.getElementById("secondLeft");
var sRight = document.getElementById("secondRight");
var dropItLow = document.getElementById("dropItLoww");
var value = dropItLow.options[dropItLow.selectedIndex].value;
var tLeft = document.getElementById("thirdLeft")
var tLeftC = document.getElementsByClassName("")

function clearP(){
    var messageArr = document.getElementsByClassName("message");
while(messageArr.length > 0){
    messageArr[0].remove();
}
}

dropItLow.addEventListener("change", function themeCheck() {
    
if (dropItLow.value === "bbText"){
    fLeft.style.backgroundColor = "lightblue";
    sLeft.style.backgroundColor = "lightblue";
    fRight.style.backgroundColor = "burlywood";
    sRight.style.backgroundColor = "burlywood";
    fRight.style.color = "black";
    sRight.style.color = "black";
    tLeft.style.backgroundColor = "lightblue";
} else if(dropItLow.value === "rbText") {
    fLeft.style.backgroundColor = "red";
    sLeft.style.backgroundColor = "red";
    fRight.style.backgroundColor = "black";
    sRight.style.backgroundColor = "black";
    fRight.style.color = "white";
    sRight.style.color = "white";
    tLeft.style.backgroundColor = "red";

}

});
dropItLow.addEventListener("change", function() {

});
var newMsg = document.getElementById("newMsgg");

console.log(newMsg);


newMsg.addEventListener("click", function getInputValue(){
    console.log("I have been clicked");
    var newInputV = document.getElementById("input").value;
    console.log(newInputV);
    var idMain = document.createElement("div");
    idMain.innerHTML = newInputV;
    idMain.setAttribute("id","thirdLeft");
    idMain.setAttribute("class", "message");
    if (dropItLow.value === "bbText"){
        idMain.style.backgroundColor = "lightblue";
    } else if (dropItLow.value === "rbText"){
        idMain.style.backgroundColor = "red";
    }
    
    var myMsgs = document.getElementById("msgBox");
    myMsgs.appendChild(idMain);
})
