/* Arithmetic Operators */
const num1 = 124;
const num2 = 3;
let result = 0;
// Addition
result = num1 + num2;
// Subtraction
result = num1 - num2;
// Multiplication
result = num1 * num2;
// Division
result = num1 / num2;
// Exponent
result = num1 ** num2;
// Modulo
result = num1 % num2;
// Increment & Decrement
result++;
result--;
console.log(result);

/* Comparison Operators and Equality */
// Comparison Operator => true or false
const a = 5;
const b = 10;

// Greater than
console.log(a > b);
// Greater than or equal to
console.log(a >= b);
// Less than
console.log(a < b);
// Less than or equal to
console.log(a <= b);
// Equal to
console.log(a == b);
// Not equal to
console.log(a != b);

// Strict Equality
console.log(a === b);
// Strict Inequality
console.log(a !== b);

/* Strict VS Loose Equality */
/* 
    Strict Equality 
        => Compares VALUES and DATA TYPES
        => Return true only if both are the same
*/
console.log(5 === "5");

/* 
    Loose Equality 
        => Doesn't compares DATA TYPES
        => Should almost never use
*/
console.log(5 == "5");

/*
    The Good Ones: ===, !==
    The Evil Twins: == !=
*/
console.log(0 == '');
console.log(0 == '0');
console.log('false' == false);
console.log('0' == false);
console.log(true == 1);

/* Logical Operators */
// OR (||) => AT LEAST ONE OPERAND IS TRUE => TRUE
console.log(false || false); // false
console.log(true || false); // true
console.log(true || false || false); // true
// AND (&&) => ALL OPERANDS ARE TRUE => TRUE
console.log(true && true); // true
console.log(true && false); // false
console.log(true && false && true); // false
// NOT (!) => REVERSES THE BOOLEAN VALUE
console.log(true); // false
console.log(false); // true

/* Assignment Operators */

let number = 5;
number += 6; // number = number + 6, works for all arithmetic operators
console.log(number);

let string = "Hello";
string += ", I am Keil!";
console.log(string);
