"use strict";

function addLetters(...letters) {
  if (letters.length === 0) return "z";
  //convert to array
  const lettersArray = letters;
  //convert letters to numbers
  const numbers = lettersArray.map((l) => l.charCodeAt(0) - 96);
  //sum numbers
  let total = numbers.reduce((previous, current) => previous + current);
  if (total > 26) {
    total = total % 26;
  }
  console.log(total);
  //convert total to number
  return String.fromCharCode(96 + total);
}

const result = addLetters("a", "b", "c");
console.log(result);
