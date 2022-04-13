// LETS GO BROTHER//
let buttons = document.querySelectorAll(".butt")
console.log(buttons)
buttons.forEach(button => {
    button.addEventListener("click", totalMe)});

function totalMe(){
let boBomb = document.getElementById("textBox1").value;
let goomba = document.getElementById("textBox2").value;
let cheeps = document.getElementById("textBox3").value;
let bomb = boBomb * 7;
let goom = goomba * 5;
let cheep = cheeps * 11;
let total = bomb + goom + cheep;
document.getElementById("total").innerHTML = "TOTAL " + total;
}
