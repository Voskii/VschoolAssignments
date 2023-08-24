
const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
const alphabet = "abcdefghijklmnopqrstuvwxyz";
indAlpha = alphabet.split("");
// console.log(indAlpha);

const log = () => console.log()

function forception (peeps, alpha){
    let foundPeople = new Array()

    for(i = 0; i < peeps.length; i++){
        foundPeople.push(peeps[i])
        for(j = 0; j < alpha.length; j++) foundPeople.push(alpha[j])
    }

    return log(foundPeople)
}
forception(people, alphabet)

//yaya
// var result = []
// function forception(people, alphabet){
// for(var j = 0; j <= alphabet.length; j++){
//     for(var i = 0; i <= people.length; i+=1){
//         result.push(people[i], alphabet[j])
//         }
// }
// return result;
// }
// console.log(forception(people, result));    
// // console.log(result);
