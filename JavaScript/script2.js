/*
    VARIABLES and DATA TYPES

    * types in JavaScript are dynamic and mutable
    * they are decided at runtime
    * they are stored in memory as plaintext
    
    * Variables
    * 'let' is your standard variable
    * 'const' is a constant
    * 'var' is the old way of declaring variables
    * var is depreciated
    * we use camelCase for naming
    * sometime preceding a variable is an underscore _ or a dollar sign $
    
    * Data Types
    * two 'types' of types
    * primatives and objects
    
    * Objects have the object data type
    * primatives have boolean, number, string, null, undefined, bigint, symbol

*/

let myBoolean = true;
console.log(myBoolean);

let myNumber =4;
console.log(myNumber);

let myString = 'this os a string';
console.log(myString);

let myBigInt = 9999999999999999n; //this is a numeric literal
console.log(myBigInt);

let mySymbol = Symbol('description of a symbol'); // not often used
console.log(mySymbol);

let myNull = null;
console.log(myNull);

let myUndefined;
console.log(myUndefined);

/*
    * null and undefined are different
    * null is EMPTY
    * undefined has not been initialised (no real value)
*/

console.log(typeof(myNull));
console.log(typeof(myUndefined));

// OBJECTS

// collection of properties
// mutable
// made of key : value pairs

let myObject = {
    key : 'value',
    a : 'b'
}

console.log(myObject);

// STRING CONCATENATION
// joining string end-to-end
// it is memory intensive because you create multiple strings

let stringOne = '41 + 13 = '
let result = 41 + 13;
console.log(stringOne + result);

// STRING INTERPOLATION
// we can use just one strong
// we use string (template) literals as placeholders

let stringTwo = `41 + 13 = ${41 + 13}`; // need to use the ticks (weird speech marks)
console.log(stringTwo);

// EXERCISES
//Task 1
let a;
let b = "12345";
let c = 12345;
let d = true;
let e = {a: "JavaScript"};

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

//Task 2
let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);