
var form = document.getElementById("add-todo");
var myDel = document.getElementById("myDeleteB");
form.addEventListener("submit", storeV);
subButn = document.getElementById("subButt");
// subButn.addEventListener("click", (e) => {
//     e.preventDefault();
// })


function storeV(){
var subValue = document.getElementById("title").value;
var newLi = document.createElement("li");
var myList = document.getElementById("list");
var myEdit = document.createElement("button");
var myDel = document.createElement("button");
var myEditId = document.getElementById("editButt")

    newLi.setAttribute("Id", "newLi");
    newLi.setAttribute("class", "newLii");
    newLi.textContent = subValue;
    myList.appendChild(newLi);
    myDel.textContent = "X";
    myDel.setAttribute("id", "delButt");
    newLi.appendChild(myDel);
    myEdit.innerHTML = "Edit";
    myEdit.setAttribute("id", "editButt");
    newLi.appendChild(myEdit);
    
myDel.addEventListener("click", () => {  
        document.getElementById("newLi").remove(newLi);
});
myEdit.addEventListener("click" , () => {
        
    
var     newEdit = document.createElement("input");
        newEdit.setAttribute("type", "text");
        newEdit.setAttribute("id", "newEdit");
        newEdit.setAttribute("placeholder", subValue);
        newEdit.value = subValue;
        newLi.appendChild(newEdit);
        // myEdit.textContent = "save";
var save = document.createElement("button");
        save.textContent = "save"
    }   

)}
// else if(myEdit.innerHTML === "save"){
//         myEdit.addEventListener("click" , () => {
//         newLi.textContent = newEdit.innerHTML;




// var listArr = document.querySelectorAll("list");
//     for(i = 0; i < listArr.length; i++) {
//     console.log(listArr);
//
