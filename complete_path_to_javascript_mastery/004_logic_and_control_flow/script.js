/* If - Else Statements */
const age = 18;

if (age > 18) {
    console.log("Age is greater than 18. You're welcome here!");
}
if (age == 18) {
    console.log("You just turned 18. WELCOME!");
}
else {
    console.log("You are not allowed here!");
}

/* Truthy & Falsy Values */

/* 
Falsy Values:
-> false
-> 0
-> ''
-> null
-> undefined
-> NaN
*/

/* 
Logical Operators 
'&&' => AND
'||' => OR
'!' => NOT
*/

const age2 = 19;
const isCool = true;

if (isCool && age2 > 18) {
    console.log("You may enter!!!");
}

console.log('truthy' && 0 && 'test' && 999);
console.log('truthy' || 0 || 'test' || 999);
