/* 
Tricky Parts
*/

// Global Scope
let name = 'John';
const logName = () => {
    console.log(name);

    name = 'Jane';
}
logName();
console.log(name); // This shows the disadvantage of global variable

// Local Scope / Function Scope
const someFunction = () => {
    const name2 = 'Myk';
    console.log(name2);
}
someFunction();
console.log(name2); // This would cause error

// Block Scope
if(true) {
    const name3 = 'John';
    console.log(name3); // This will work
}
console.log(name3); // name3 can't be found

// Hoisting
var hoist;
console.log(hoist);
hoist = "The variable has been hoisted."

function hoist2() {
    var message;
    console.log(message);
    message = 'Test';
}
hoist2();

// Closure
const outer = () => {
	const outerVar = 'Hello!'
	const inner = () => {
		const innerVar = 'Hi!'
		console.log(innerVar, outerVar);
	}
	return inner;
}
const innerFn = outer(); // closure, because we have access to the variables of the parent scope
innerFn();

const init = () => {
    const hobby = 'Learning JavaScript'; // hobby is a local variable created by init
    const displayHobby = () => { // displayHobby() is the inner function, a closure
        console.log(hobby); // using variable declared in the parent function
    }
    return displayHobby;
    }
var myFunc = init();
myFunc();