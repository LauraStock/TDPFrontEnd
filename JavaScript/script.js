/*

USE STRICT and CONSOLE

* ECMA Script 5 - european computer manufacturer's association
* ES6 we no longer need to use 'use strict'
* if you used to use a bad syntac or protected keywords, it wouldn't throw errors but now it does.
* you can't accidently create a global variable
* can't assign values to a non-writable property
* can't use protected keywords

*/

//! preotected keyword example
// let let = 2; <- cannot be done as let is a keyword

console.log('Hello world!');

// ? There are a few types of console outputs we can use.

let text = 'this is a message';

console.log(text);

console.info(text);

console.warn(text);

console.error(text);

// you can also use the console to output objects and all other data types.

// you can also style the console however you like.

console.log('%c' + text, 'colour: black; background-color: yellow; font-size:20px; padding: 5px');

// you can call more than one style but you have to call them in order.

console.log('%c' + text + ' ' + '%c' + text, 'color:red','color:blue')  ;

// TASKS

//Question 1
console.log('Laura');
console.log('Stock');
console.log('Warrington');
console.log('Cancer');

//Question 2
console.log('%c' + text, 'color: orange; background-color: black; font-family: fantasy; padding: 10px; font-weight: bold');

