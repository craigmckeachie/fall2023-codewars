"use strict";

function highestAndLowest() {
  //get the string into an array
  //convert all items in the array to numbers
  //figure out the max number
  //figure out the min number
  //return the max number and a space and then the min number
}

function highAndLow(stringOfNumbers) {
  let arrayOfNumbersAsStrings = stringOfNumbers.split(" ");
  const numbers = arrayOfNumbersAsStrings.map(Number); 
  let minimumNumber = Math.min(...numbers);
  let maximumNumber = Math.max(...numbers);
  return `${maximumNumber} ${minimumNumber}`;
}

const result = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");

console.log(result);
if (result == "3 1") {
  console.log("test passed");
} else {
  console.log("test failed");
}

//  let numbers = [];
//  for (const numberAsString of arrayOfNumbersAsStrings) {
//     const number = Number(numberAsString);
//     numbers.push(number);
//  }

//   let students = [1, 2, 3]

//   function print(...students) {
//     console.log(students);
//   }

//   print(students)


 // [1,2,3]
  //...
  //1,2,3
