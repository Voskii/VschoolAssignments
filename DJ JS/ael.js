var button = document.getElementById("SMASH ME")
    button.addEventListener("click", function(){
    document.getElementById("SMASH ME").innerHTML = "Sheeeeeeesh";
})

var square = document.getElementById("square");
var bg = document.getElementById("bg");
window.addEventListener("keydown", keyQ)
document.addEventListener("wheel", orangeWheel);




function keyQ(e){
    if (e.keyCode === 66){
        square.style.background = "blue";
    
    }   else if (e.keyCode === 82) {
        square.style.background = "red";

    }   else if (e.keyCode === 89) {
        square.style.background = "yellow";

    }   else if (e.keyCode === 71) {
        square.style.background = "green";

    }   else if (e.keyCode === 79) {
        square.style.background = "orange";
    }  
}

function orangeWheel(){
    square.style.backgroundColor = "orange";
}


square.addEventListener("mouseover", function(){
    square.style.backgroundColor="blue";
})

square.addEventListener("mousedown", function(){
    square.style.backgroundColor="red";
})

square.addEventListener("mouseup", function(){
    square.style.backgroundColor="yellow";
})

square.addEventListener("dblclick", function(){
    square.style.backgroundColor="green";
})

square.addEventListener("wheel", function(){
    square.style.backgroundColor="orange";
})
    
document.addEventListener("keydown", function(event) {
    console.log(event.which);
})