/*
    CONDITIONALS 
    TRUTHY or FALSEY

    Falsey:

    * false
    * 0
    * ``
    * undefined
    * null
    * NaN - not a number
     
    Everything else will return true and this can be used to really pack down code.
*/

console.log(undefined ? `true` : `false`);

// IF (ELSE and ELSE IF)
// checking a condition, then running a code block if the condition is met.

let a = 0;

if (a==0){
    console.log(`sunshine`);
} else if (a != 2){
    console.log(`moonlight`);
} else{
    console.log(`boogie`);
}

// Can also use and &&, or ||

//ternary statements - shorthand version of an IF ELSE statement
let x = true;
// condition ? value if true : value if false;
console.log(x ? `x is true` : `x is false`);

//  EQUALITY AND TYPE
/*
    * type is mutable in JS
    * it will try to work out the data type that you want
    * this means you cna compere different types and have them equal
*/

console.log(1 == `1` ? `true` : `false`);

// javascript is mutating the type so one equals one
// it is checking the value only

// What if we want to check the data type as well?
//TODO: use the strictly equals operator (===)

console.log(1 === `1` ? `true` : `false`);

// EXERCISES
// TASK 1 
let strictA = true;
let strictB = 1;
console.log(strictA == strictB); // outputs true
console.log(strictA === strictB); // outputs false

// TASK 2
console.log(strictA != strictB);
console.log(strictA !== strictB);

//TASK 3
let age = 23;

if (18<age && age<65){
    console.log(`Time to work`);
}else if(age>=65){
    console.log(`retirement age`);
}else{
    console.log(`underage`);
}

// TASK 4
console.log(age > 50 ? `over 50` : `under 50`);





