const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
let canGo = [];

function sortedOfAge(arr, cgArr){
let ofAge = arr.reduce(function(final, fish){
    if(fish.age >= 18){
        final.push(fish)
        }
        return final
    }, [])
    ofAge.sort(function(a, b){
        if(a.lastName > b.lastName){
            return 1
        }
        if(a.lastName < b.lastName){
            return -1
        }
        return 0
    })
let bladeTwo = ofAge.map(function(fish){
    return '<li>' + fish.firstName + fish.lastName + ' is ' + fish.age + '</li>';
    })
    console.log(bladeTwo);
}
sortedOfAge(peopleArray, canGo);