const form1 = document["adding-form"]
const form2 = document["subtracting-form"]
const form3 = document["multiplying-form"]


// function add(number1, number2){
    
//     console.log(number1 + number2);
// }

// let result = add(3, 4)

// Form 1 adding

form1.addEventListener("submit", function (e) {
    e.preventDefault()


    

    const firstNumberAdding = form1.addNum1.value
    const secondNumberAdding = form1.addNum2.value

    
    form1.addNum1.value = " "
    form1.addNum2.value = " "
    
    console.log(firstNumberAdding)
    console.log(secondNumberAdding)

    function add(firstNumberAdding, secondNumberAdding){
    
        return firstNumberAdding + secondNumberAdding
    }
    console.log(add(firstNumberAdding + secondNumberAdding))

    
    const header1 = document.createElement("h2")
    header1.textContent = result
    document.getElementById("section1").append(header1)



})