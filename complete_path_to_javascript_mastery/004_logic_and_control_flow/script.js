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

/* Switch Statements */
const superHero = "Batman";

switch(superHero) {
    case 'Iron Man':
        console.log("I am Iron Man!");
    break;
    case 'Thor':
        console.log("That is my hammer...");
    break;
    case 'Black Widow':
        console.log('One shot, one kill...');
    break;
    default:
        console.log("Enter a valid superhero name!");
    break;
}

/* Ternary Operator */
const age3 = 18;

age3 >= 18 ? console.log('You can drive') : console.log('You cannot drive yet.'); 