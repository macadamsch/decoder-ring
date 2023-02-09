// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
 
  const dictionary = [
    { letter: "a", position: "11" }, //create the dictionary
    { letter: "b", position: "21" },
    { letter: "c", position: "31" },
    { letter: "d", position: "41" },
    { letter: "e", position: "51" },
    { letter: "f", position: "12" },
    { letter: "g", position: "22" },
    { letter: "h", position: "32" },
    { letter: "i", position: "42" },
    { letter: "j", position: "42" },
    { letter: "k", position: "52" },
    { letter: "l", position: "13" },
    { letter: "m", position: "23" },
    { letter: "n", position: "33" },
    { letter: "o", position: "43" },
    { letter: "p", position: "53" },
    { letter: "q", position: "14" },
    { letter: "r", position: "24" },
    { letter: "s", position: "34" },
    { letter: "t", position: "44" },
    { letter: "u", position: "54" },
    { letter: "v", position: "15" },
    { letter: "w", position: "25" },
    { letter: "x", position: "35" },
    { letter: "y", position: "45" },
    { letter: "z", position: "55" },
  ];

  const alphabetArray = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z",
  ];
  const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
  function encoder(input){ //encodes messages (ex. "thinkful" -> "4432423352125413")
    let encodedMsg = ""; //empty number string
    const inputLC = input.toLowerCase(); //sets input to lower case
    for (let i=0; i < inputLC.length; i++){ //loop through string of the message
      const currentLetter = inputLC[i];
      if (alphabetArray.includes(currentLetter)){ //if current character is a letter
        const encodedNum = dictionary.find(lookup => lookup.letter === currentLetter).position; //finds the number in the dictionary array
        encodedMsg += encodedNum; //adds number to output string
      } else {
        encodedMsg += currentLetter; //if current character is not a letter, add to string (ex. space or punctuation)
      }
    }
    return encodedMsg //returns the string of numbers
  }

  function decoder(input){ //decodes messages (ex. "4432423352125413" -> "th(i/j)nkful")
    if (!inputTest(input)) { //runs helper function inputTest to determine if there's an even/odd number of characters in the input
      return false;
    }
    let decodedMsg = ""; //empty message string
    for (let i=0; i<input.length; i++){
      if (numberArray.includes(input[i])){ //if a number
        const numOne = input[i]; //take first number
        const numTwo = input[i+1]; //and the second number
        i++;
        const checkNumber = `${numOne}${numTwo}` //put the two numbers together
        if (checkNumber === "42") { //if number is 42, return i/j
          decodedMsg += "(i/j)";
        } else {
          const encodedLetter = dictionary.find(numberObj => numberObj.position === checkNumber).letter; //find the letter corresponding to the number
          decodedMsg += encodedLetter;
        }
      } else {
        decodedMsg += " " //if character is not a number, add space to string
      }
    }
    return decodedMsg; //return the decoded message
  }

  function inputTest(input){ //helper function to test if an encoded message is an odd or even number of characters before decoding
    let numbersOnly = ""; //empty string to hold all numbers
    for (let i=0; i<input.length; i++){ //loop through the input
      if (numberArray.includes(input[i])){ //if input is a number
        numbersOnly += input[i]  //add to numbersOnly string
      }
    }
    if (numbersOnly.includes(6 || 7 || 8 || 9)){
      return false; //if string includes any numbers that can't be in the square, returns false
    }
    return numbersOnly.length % 2 != 0 ? false : true; //divide numbersOnly by 2 and if it is not zero then return false, otherwise return true
  }

  function polybius(input, encode = true) {
    return encode ? encoder(input) : decoder(input);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
