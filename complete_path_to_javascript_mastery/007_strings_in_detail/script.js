/* 
String in Details
*/

// Introduction to Strings
const single = 'This is a string';
const double = "This is a string";

const sum = (a,b) => a + b;
const total = `The sum is ${sum(2, 10)}.`; // Backticks are dynamic
const rows = `1
2
3
`
const greeting = 'Hi, I\'m John, \"Johnny John\".';
const greeting2 = `Hi, I'm John, "Johnny John".`;

console.log(single);
console.log(double);
console.log(total);
console.log(rows);
console.log(greeting);
console.log(greeting2);

// String Length and Basic Properties
const name = 'John'
console.log(name.length);

const firstLetter = name[0];
const lastLetter = name[name.length - 1];

console.log(firstLetter);
console.log(lastLetter);