/**
 * Primitive Data Types
 */
var name = "Deniz";
var age = 26;
var isAlive = true;
var height; // undefined
var weight = null; // when a variable has no value and type is not known beforehand

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isAlive); // boolean
console.log(typeof height); // undefined
console.log(typeof weight); // null?

/**
 * Non-Primitive Data Types
 */
var fruits = ["apple", "orange"];
var game = {
  name: "God Of War",
  releaseDate: {
    month: "July",
    year: 2015
  },
  genre: "Action",
  isGameOfTheYear: true
};

fruits[0]; // get the first element of an array
fruits.push("lemon"); // add an element to an array
fruits.pop(); // remove last item of an array

game.name; // get the property of an object
game["name"]; // get the property of an object
game.releaseDate.year; // nested properties

if (game.isGameOfTheYear) {
  console.log(`${game.name} is the Game of the Year!`);
} else {
  console.log("No, it is not...");
}

var x = 5;
var y = 2;
console.log(eval("x * y"));

/**
 * Making a for loop
 */

for (var fruit of fruits) {
  console.log(fruit);
}

for (var index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

fruits.forEach(function(fruit) {
  console.log(fruit);
});

fruits.forEach(fruit => console.log(fruit));

/**
 * Use of functions in JavaScript
 */
// Definition of a Function
function sayHello() {
  console.log("Hello!");
}
// Function call
sayHello();

/**
 * Const, Let, Var
 */
const PI = 3.14;
PI = 28; // cannot reassign a value to const variable

const person = {
  name: "Deniz"
};

person.name = "Burak"; // this is okay but use let for objects
console.log(person.name);

let distance = 2000;
distance = 2100; // can reassign a value to let variable

/**
 * Use of switch
 */
const USER_STATUS = "NEW_REGISTERED";

switch (USER_STATUS) {
  case "NEW_REGISTERED":
    console.log("Show welcome page!");
    break;
  case "SUSPENDED":
    console.log("Go away!");
    break;
  default:
    console.log("Please register");
    break;
}

/**
 * Async - Sync
 */
setTimeout(function() {console.log(2)}, 1000);
setTimeout(function() {console.log(3)}, 2000);
console.log(1)
setTimeout(function() {console.log(4)}, 2000);


/**
 * Chaining multiple functions (Currying)
 */
const fruits = ["apple", "orange", "lemon"];

const fruitsNew = fruits
  .map(fruit => fruit.toUpperCase())
  .filter(fruit => fruit === "LEMON")
  .map(fruit => fruit.toLowerCase());

console.log(fruitsNew);