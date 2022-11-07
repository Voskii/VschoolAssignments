// ELLO BRUV
var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";

function moveMe(shift){
    for (let i = 0; i < alphabet.length; i++){
        let offset = (i + shift) % alphabet.length;
        newalpha += alphabet[offset];
        console.log(newalpha)
    }
}

function woahBro(input){
    let result = "";
    for (let i = 0; i < input.length; i++){
        let index = alphabet.indexOf(input[i]);
        if(index < 0) {
          input[i] === ' '
          result += input[i]
        }
        else {
          result += newalpha[index];
        }
        
    }
    console.log(result)
}

moveMe(shift)
woahBro(input)

// var caesarShift = function (input, shift) {
//     // Wrap the shift
//     if (shift < 0) {
//       return caesarShift(input, shift + 26);
//     }
  
//     // Make an output variable
//     var output = "";
  
//     // Go through each character
//     for (var i = 0; i < input.length; i++) {
//       // Get the character we'll be appending
//       var c = input[i];
  
//       // If it's a letter...
//       if (c.match(/[a-z]/i)) {
//         // Get its code
//         var code = input.charCodeAt(i);
//         // Lowercase letters
//          if (code >= 97 && code <= 122) {
//           c = inputing.fromCharCode(((code - 97 + shift) % 26) + 97);
//         }
//       }
  
//       // Append
//       output += c;
//       console.log(`is this everything you have been looking for:`, output)
      
//     }
  
//     // All done!
//     return console.log(output);
    
//   };

//   caesarShift();
  