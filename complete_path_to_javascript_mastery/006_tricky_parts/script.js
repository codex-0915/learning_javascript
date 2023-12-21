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