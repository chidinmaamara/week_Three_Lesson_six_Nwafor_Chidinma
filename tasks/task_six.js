// Given the following code snippet, identify and fix the syntax error:
// if (x === 5 {
//   console.log("x is equal to 5");
// }
let x = 2   //i added a value to x
if (x === 5) { //fixed the paranthesis 
}
console.log('x is equal to 5');  //took the console.log command outside the curly brace

// Task: Missing semicolon

// Given the following code snippet, identify and fix the syntax error:
// const message = "Hello, world"
// console.log(message)

const message = 'Hello, world'; //fixed the semi-colon here
console.log(message);

// Task: Incorrect closing brace placement
// Given the following code snippet, identify and fix the syntax error:
// function sayHello() {
//   console.log("Hello!");
// } 
// console.log("Goodbye!");
   
function sayHello() {
} 
console.log("Hello! Goodbye!");


// Task: Mismatched opening and closing brackets

// Given the following code snippet, identify and fix the syntax error:
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[2];

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]);



// Task: Incorrect function definition

// Given the following code snippet, identify and fix the syntax error:

// const addNumbers = function(x, y)
//   return x + y;
// };
// console.log(addNumbers(5, 10));

const addNumbers = function(x, y) {
  return x + y;
};
console.log(addNumbers(5, 10));