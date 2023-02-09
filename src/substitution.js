// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function key(alphabet) { //helper function that maps each character in the alphabet to standard alphabet
    const dictionary = [
      { plainText: "a", cipherText: "a" },
      { plainText: "b", cipherText: "b" },
      { plainText: "c", cipherText: "c" },
      { plainText: "d", cipherText: "d" },
      { plainText: "e", cipherText: "e" },
      { plainText: "f", cipherText: "f" },
      { plainText: "g", cipherText: "g" },
      { plainText: "h", cipherText: "h" },
      { plainText: "i", cipherText: "i" },
      { plainText: "j", cipherText: "j" },
      { plainText: "k", cipherText: "k" },
      { plainText: "l", cipherText: "l" },
      { plainText: "m", cipherText: "m" },
      { plainText: "n", cipherText: "n" },
      { plainText: "o", cipherText: "o" },
      { plainText: "p", cipherText: "p" },
      { plainText: "q", cipherText: "q" },
      { plainText: "r", cipherText: "r" },
      { plainText: "s", cipherText: "s" },
      { plainText: "t", cipherText: "t" },
      { plainText: "u", cipherText: "u" },
      { plainText: "v", cipherText: "v" },
      { plainText: "w", cipherText: "w" },
      { plainText: "x", cipherText: "x" },
      { plainText: "y", cipherText: "y" },
      { plainText: "z", cipherText: "z" },
    ];
    for (let i = 0; i < alphabet.length; i++) { //loop through the given cipher alphabet
      const workingPosition = dictionary[i]; //find the dictionary entry whose position matches the alphabet[i]
      workingPosition.cipherText = alphabet[i]; //make that entry's encodedText = to the letter at alphatbet[i]
    }
    return dictionary; //return the dictionary
  }

  function uniqueAlpha(alphabet){ //helper function to check for uniqueness of each character in the given alphabet
    const alphabetContainer = {};
    for (let i=0; i<alphabet.length; i++){ //for each character in the alphabet
      const currentLetter = alphabet[i]; //check the letter
      if (alphabetContainer[currentLetter]) return false; //return false if it is already in the container
      alphabetContainer[currentLetter] = true //otherwise put the letter into the container
    }
    return true; //returns true if there are no duplicate letters in the alphabet
  }

/* ENCODING */
  function encoder(input, dictionary){
    let result = ""; //create empty string for result message
    for (let i=0; i<input.length; i++){ //loop through input string
      const currentLetter = input[i];
      if (currentLetter === " ") { //if current character is a space
        result += " " //add space to result
      } else { //if current character is a letter
        const dictionaryPosition = dictionary.find(letter => letter.plainText === currentLetter //find the letter in the dictionary
          );
        result += dictionaryPosition.cipherText //add the encoded letter to the result string
      }
    }
    return result; //returns encoded result
  }

/* DECODING */
  function decoder(input, dictionary){
    let result = ""; //create empty string for result message
    for (let i=0; i<input.length; i++){ //loop through input string
      const currentLetter = input[i];
      if (currentLetter === " ") { //if current charcter is a space, add space to result
        result += " ";
      } else { //if current character is a letter, find the letter in the dictionary and add the decoded letter to the result string
        const dictionaryPosition = dictionary.find(letter => letter.cipherText === currentLetter
        );
        result += dictionaryPosition.plainText;
      }
    }
    return result; //returns decoded result
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false; //if alphabet input doesn't exist or is more/less than 26 characters, return false
    if (!uniqueAlpha(alphabet)) return false; //if helper function runs and there are duplicates in alphabet, return false
    const dictionary = key(alphabet) //run the key to make a dictionary based on the cipher alphabet
    const lowerCaseInput = input.toLowerCase(); //normalize the input to lower case
    return encode ? encoder(lowerCaseInput,dictionary) : decoder(lowerCaseInput,dictionary) //runs encode/decode functions depending on if input of encode value is true/falsey
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
