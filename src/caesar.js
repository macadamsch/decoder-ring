// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const letters = "abcdefghijklmnopqrstuvwxyz";
  
  function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined) {    // if shift is greater than 25, less than -25, or equal to zero/undefined, return false
      return false;
    }
    let result = "";
    if (encode === false){    // if encode = false, reverse shift from pos to neg (or neg to pos) (multiply shift input by -1)
      shift = shift * -1;
    }
    for (let i=0; i<input.length; i++){      // look at each character in the string, one by one for each character
      const letter = input[i].toLowerCase(); // normalize message to lower case
      if (letters.includes(letter)){      // if character is in alphabet/lookup string, find the index of the current character in the lookup using .includes()
        const letterIndex = letters.indexOf(letter); //create a variable for the index of the letter we are looking up
        let shiftedIndex = letterIndex + shift;      // add the shift to that index
        if (shiftedIndex > 25){ //if index is at the end of the string, loop back to the beginning
          shiftedIndex += -26;
        } else if (shiftedIndex < 0 && shiftedIndex > -25) { //if index is at the start of the string and the shift is negative, loop to the end
          shiftedIndex += 26;
        }
        const shiftedLetter = letters[shiftedIndex];      // find the character at the shifted index and add it to our result
        result += shiftedLetter;
      } else {
        result += letter;
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
