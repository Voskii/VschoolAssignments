let form = document.airlineForm;
form.addEventListener("submit", formAlert);

function formAlert() {
    
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements["vegan"].checked) {
        diet.push(document.getElementById("vegan").value);
        console.log(form.elements["vegan"].checked);
    }
    else if (form.elements["gluten"].checked) {
        diet.push(document.getElementById("gluten").value);
        console.log(form.elements["gluten"].checked);
    }
    else if (form.elements["paleo"].checked) {
        diet.push(document.getElementById("paleo").value);
        console.log(form.elements["paleo"].checked)
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}
