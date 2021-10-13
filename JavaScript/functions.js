/*
    TODO: FUNCTIONS!
    * a block of code that does a thing!
    * it is envoked or run when something calls it
    * DRY principles
    * they can take arguments
    * functions are globally scoped
*/

function hello(message) {
    // execute code in here
    console.log(message);
}

hello(`Greetings world!`);

// ? RETURNS

// * when a function reaches a return statement
// * it stops

let bye = false;

function goodbye() {
    console.log(`goodbye`);
    return bye = true;
}

goodbye();

// variable returns

function sum(a, b) {
    return a+b;
}

console.log(
    sum(11111,4)
);

// ! ARROW FUNCTIONS

// greeting = (message) => {
//     return console.log(message);
// }

// greeting = (message) => console.log(message);

greeting = message => console.log(message);

greeting(`greetings!`);

// EXERCISES
// Task 1
function subtract(num1, num2){
    return num1 - num2;
}
console.log(subtract(12,5));

// Task 2
function welcome(name, age, gender){
    console.log(`My name is ${name}, I am ${age} years old and of gender ${gender}`);
}
welcome(`Laura`,23,`Female`)

// Task3
powerUp = (n1,n2) => Math.pow(n1,n2);
console.log(powerUp(2,3));
