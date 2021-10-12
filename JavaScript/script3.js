/*

    ASI and ITERATION

    * Automatic
    * Semi-colon
    * Insertion
    
    Javascript automatically inserts semi-colons for us. 
    This can lead to unwanted behaviour
*/

// Muli-line maths (no semi-colon)

let a =1
let b=2

a
++ // increment by one
b

console.log(`a = ${a}, b = ${b}`)

// TODO: fix this!

let c = 1;
let d = 1;

c;
d++;

console.log(`c = ${c}, d = ${d}`);

// ITERATION
// Loops

// FOR loop
// use a counter and run while a condition is met

for(let i = 0; i < 10; i++){
    console.log(`i = ${i}`);
}

// WHILE loop
// works with booleans, runs until a condition is no longer true

let condition = true;
let increment = 0;
while(condition){
    console.log(`increment me!`);
    increment++;

    if (increment == 3){
        condition = false;
    }
}

// DO WHILE loop
// Like a while loop but always runs at least once

let con = false;
let inc = 0;

do{
    console.log(`Do while loop!`);
    inc++;

    if (inc == 3){
        con = false;
    }
} while(con == true);

// SWITCH cases
// run until break or return, more effective than if-else trees

let num = 1;

switch(num){
    case 0:
        console.log(`we are at 0`);
        break;
    case 1:
        console.log(`we are at 1`);
    case 4:
        console.log(`4 now`);
    case 10:
        console.log(`at the end`);
        break;
    default:
        console.log(`this is the default`);
}

// EXERCISES
// Task 1

function sayHello(){
    return "Someone says Hello";
}

// Task 2 - part 1
for (let a = 100; a<= 200; a++){
    console.log(`a=${a}`)
}

//Part 2
for (let a = 100; a<=200; a++){
    switch(a%2){
        case 0:
            console.log(`-`);
            break;
        case 1:
            console.log(`*`);
            break;
    }
}

//Part 3
for (let a = 1; a<=10; a++){
    for (let b = 1; b<=10; b++){
        console.log(a);
    }
}

//Part 5
let now = new Date();
now = now.getDay();

console.log(now);

switch(now){
    case 0:
        console.log(`It's a Sunday`);
        break;
    case 6:
        console.log(`It's a Saturday`);
        break;
    case 1:
        console.log(`It's a Monday`);
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a weekday`);
        break;
    default:
        console.log(`Err that's not a day`);
        break;

}
