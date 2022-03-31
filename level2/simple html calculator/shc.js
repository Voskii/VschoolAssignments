let aButt = document.getElementById("addButt");
let sButt = document.getElementById("subButt");
let mButt = document.getElementById("multiButt");
// let aForm = document.addForm;
aButt.addEventListener("click", addMath);
sButt.addEventListener("click", subMath);
mButt.addEventListener("click", multiMath);

function addMath(){
let amInput1 = document.getElementById("addMe1").value;
let amInput2 = document.getElementById("addMe2").value;
let resultA = ((amInput1*1) + (amInput2*1))
    return aButt.textContent = resultA;
}
function subMath(){
    let smInput1 = document.getElementById("subMe1").value;
    let smInput2 = document.getElementById("subMe2").value;
    let resultS = ((smInput1*1) - (smInput2*1))
        return sButt.textContent = resultS;
}
function multiMath(){
    let mmInput1 = document.getElementById("multiMe1").value;
    let mmInput2 = document.getElementById("multiMe2").value;
    let resultM = ((mmInput1*1) * (mmInput2*1))
        return mButt.textContent = resultM;
}