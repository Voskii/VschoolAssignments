let formm = document.myForm;

// let fish = document.getElementById("foodRes");

formm.addEventListener("submit", fish)

// formm.addEventListener("submit", (event) => {
//      event.preventDefault()

// })
let wutEat = []
function fish(event){
    for(let i = 0; i < formm.foodRes.length; i++){
    if(document.myForm.foodRes[i].checked){    
    wutEat.push(formm.foodRes[i].value);
    }
}
alert("First name: " + formm.fName.value + " Last name: " + formm.lName.value + " Age: " + formm.age.value + " Gender: " + formm.gender.value + " Location " + formm.whereTo.value + " Dietary restrictions: " + wutEat);
event.preventDefault()
}


// let fish = ({First name: })
// let person = new Passenger(formm.fName.value, formm.lName.value, formm.age.value, formm.gender.value, formm.whereTo.value, wutEat);

// console.log(formm.foodRes[i].checked)
// let firstName = formm.fName.value;
// console.log(firstName)
// let lastName = formm.lName.value;
// console.log(lastName);
// let ageGan = formm.age.value;
// console.log(ageGan);
// let genderVal = formm.gender.value;
// console.log(firstName);
// let whereDestiny = formm.whereTo.value;

// console.log(genderVal);

// console.log(formm.foodRes[i].checked)

// person.First_name = formm.fName.value
// person.Last_name = formm.lName.value
// person.Age = formm.age.value
// person.Gender = formm.gender.value
// person.Location = formm.whereTo.value
// person.Dietary_Restrictions = wutEat
// function Passenger(First_name, Last_name, Age, Gender, Location, Dietary_Restrictions){
//     this.First_name = First_name;
//     this.Last_name = Last_name;
//     this.Age = Age;
//     this.Gender = Gender;
//     this.Location = Location;
//     this.Dietary_Restrictions = Dietary_Restrictions;
// }

// why this no worky also why is there a problem with the name FORM???
//
// ex. form = document.myForm DOES NOT WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//

// 
// console.log(wutEat);
// formm.fName.value + formm.lName.value + formm.age.value + formm.gender.value + formm.whereTo.value + wutEat);