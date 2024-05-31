"use strict";

function addLetters(...letters) {
  if (letters.length === 0) return "z";
  
  const numbers = convertLettersToNumbers(letters);

  let total = sum(numbers);
  if (total > 26) {
    total = total % 26;
  }
  // console.log(total);

  return covertNumberToLetter(total);
}

function sum(numbers) {
  return numbers.reduce((previous, current) => previous + current);
}

function convertLettersToNumbers(letters) {
  return letters.map((l) => l.charCodeAt(0) - 96);
}

function covertNumberToLetter(number) {
  return String.fromCharCode(96 + number);
}

const result = addLetters("a", "b", "c");
console.log(result);
