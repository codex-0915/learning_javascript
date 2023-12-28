// /* 
// String in Details
// */

// /* Introduction to Strings */
// const single = 'This is a string';
// const double = "This is a string";

// const sum = (a,b) => a + b;
// const total = `The sum is ${sum(2, 10)}.`; // Backticks are dynamic
// const rows = `1
// 2
// 3
// `
// const greeting = 'Hi, I\'m John, \"Johnny John\".';
// const greeting2 = `Hi, I'm John, "Johnny John".`;

// console.log(single);
// console.log(double);
// console.log(total);
// console.log(rows);
// console.log(greeting);
// console.log(greeting2);

// /* String Length and Basic Properties */
// const name = 'John'
// console.log(name.length);

// const firstLetter = name[0];
// const lastLetter = name[name.length - 1];

// console.log(firstLetter);
// console.log(lastLetter);

// /* Change String Case */
// const mixedCaseString = 'Hello! How are you?';

// mixedCaseString.length; // this is called a property
// const lowerCaseString = mixedCaseString.toLowerCase(); // this is called method
// const upperCaseString = mixedCaseString.toUpperCase();

// console.log(lowerCaseString);
// console.log(upperCaseString);

// /* Searching for a Substring */
// const hobbies = 'I love HTML, CSS, and JavaScript (JavaScript)';

// // indexOf()
// const firstIndex = hobbies.indexOf('JavaScript');
// const lastIndex = hobbies.lastIndexOf('JavaScript');

// console.log(firstIndex, lastIndex);

// // includes() -> has many use cases
// const including = hobbies.includes('JavaScript');

// console.log(including);

// // startsWith()
// console.log(hobbies.startsWith('I love'));
// // endsWith()
// console.log(hobbies.endsWith(')'));

// /* Getting a Substring */

// const exampleString = 'hotdog';
// // slice()
// const firstString = exampleString.slice(0,3);
// const lastString = exampleString.slice(3);
// console.log(firstString);
// console.log(lastString);

// /* Split a String */
// // Split a String
// const exampleString2 = 'The quick brown fox jumps over the lazy dogs.';

// // split()
// const letters = exampleString2.split('');
// const words = exampleString2.split(' ');

// console.log(letters);
// console.log(words);

// /* Reverse, Repeat, and Trim a String */
// const exampleString3 = 'test';
// const reversedString = exampleString3.split('').reverse().join('');

// console.log(reversedString);

// const dogSays = 'woof';
// console.log(dogSays.repeat(5));

// const email = '    test@email.com    ';
// console.log(email.trim());

/* String Exercise */
const guestList = 'Our guests are: emma, jacob, isabella, ethan';

// Tasks:
// 1. Get a length of the string. Store it in a variable called length
const guestListLength = guestList.length;
console.log(guestListLength); // 44

// 2. Uppercase the entire string. Store the result in a variable called uppercasedGuestList.
const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList); // OUR GUESTS ARE: EMMA, JACOB, ISABELLA, ETHAN

// 3. Check whether 'ETHAN' is on the uppercasedGuestList. 
// Store the answer in a variable called isEthanOnTheList. 
// The data type of the variable must be a boolean.
const isEthanOnTheList = uppercasedGuestList.includes('ETHAN');
console.log(isEthanOnTheList); // true

// 4. Create a substring that only contains the following:
// 'EMMA, JACOB, ISABELLA, ETHAN'.
// Store the answer in a variable called substringGuests
const guestStartIndex = uppercasedGuestList.indexOf("EMMA");
const substringGuests = uppercasedGuestList.slice(guestStartIndex);
console.log(substringGuests); // 'EMMA, JACOB, ISABELLA, ETHAN'

// 5. Out of the substring you just created, create an array of names of people that are on the list. 
// Store that array in a variable called guests.
const guests = substringGuests.split(", ");
console.log(guests); // [ 'EMMA', 'JACOB', 'ISABELLA', 'ETHAN']