/* Variables */

// Creating variable using var keyboard
var varVariableName = 'Welcome to variables';
console.log(varVariableName);

// Creating variable using let keyboard
let letVariableName = 'Test';
console.log(letVariableName);

/* 
Variable Naming Rules
1. The name should be unique
2. The name should not be any reserved JS keyword
3. The name must start with a character 
   (alphanumeric keyword), _, and &
*/

/* Data Types */

// String
const singleQuotes = 'Hello World!';
const doubleQuotes = 'Hello World!!';
const backticks = `Hello!!!`;
const solve = `${2 + 3}`; // This outputs a string
console.log(backticks);
console.log(solve);
console.log(typeof solve);

// Numbers
const wholeNumber = 7;
const decimalNumber = 0.3333333;
console.log(wholeNumber);
console.log(decimalNumber);
const first_num = 4;
const second_num = 2.33;
const result = first_num / second_num;
console.log(result); // NaN (not a number)