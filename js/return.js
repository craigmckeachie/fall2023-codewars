function payDebt() {
  //stuff
  return 100;
}

// let money = 100;
let money = payDebt();

console.log(money);

function function1() {
  return "a string";
}

let returnString = function1();
console.log(returnString);
//OR
// console.log(function1());

function function2() {
  return 1000;
}

let myNumber = function2();
console.log(myNumber);

function function3() {
  return true;
}

let myBoolean = function3();
console.log(myBoolean);

function function4() {
  return ["a", "b", "c"];
}

let myArray = function4();
console.log(myArray);
console.log(myArray[1]);

function function5() {
  const person = { first: "Brad", last: "Yeahgod" };
  return person;
}

let myObject = function5();
console.log(myObject);
console.log(myObject.last);
