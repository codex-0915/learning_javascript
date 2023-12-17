/* 
Functions
    A block of code => PERFORMS A TASK
*/

// FUNCTION DECLARATION (defining a function)
function square(number) {
    return number * number;
}

/* DECLARING FUNCTIONS IN JS */
// FUNCTION CALL (calling/executing a function)
const result = square(5);
console.log(result);

// Function declaration
function name(params) {
    // statements
    // have access to "this" keyword
}

// Function expression
const name2 = function(params) {
    // statements
}

// Arrow function
const name3 = (params) => {
    // statements
}

/* Invoking Functions */
function sayHi(name) {
    console.log(`Hi, ${name}!`);
}

sayHi('Joe');
sayHi('Jane');

/* Function Return */
function add(a, b) {
    return a + b;
}
const sum = add(2, 3);
console.log(sum);

/* Arrow Function */
const square2 = (num) => {
    return num * num;
}
/* More concise if you'll return the result quickly, you can omit the braces
const square2 = (num) => num * num;
*/
const result2 = square2(12);
console.log(result2);