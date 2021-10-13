/*
    OBJECTS, ARRAYS and JSON

*/

// objects
// * collection of data
// * in any order
// * made up of key : value pairs

let animal = new Object();

animal[`name`] = `Clifford`;
animal[`type`] = `dog`;
animal[`size`] = `big`;

console.log(animal.size);

console.log(animal);

// Literal motation is quicker and easier

let vehicle = {
    "type" : "bike",
    "seats" : `1`,
    "wheels" : 2
}

console.log(vehicle);

// ARRAYS
//objects can be stored in an array
// making an array using literal notation

let garage = [
    vehicle,
    {"type":"car","seats": 5, "wheels":4}
]

console.log(garage);

// To iterate over an array

let x = [`a`,`b`,`c`,`d`,`e`];

// the normal way is using a standard FOR loop

for (let i = 0; i< x.length; i++){
    console.log(x[i]);
}

// using an ENHANCED for loop
console.log(`Enhanced for loop:`);

for (let item of x){
    console.log(item);
}

// ARRAY OBJECT METHODS
// some methods that you can use with arrays to carry out functionality

//reverse - saves the reversed array
console.log(x.reverse());

// join
//converts array to string joined by argument string
console.log(x.join(`>`));

// JSON
// Literal notation for objects
// Javascript object notation

let newJSON = {
    "name" : "Laura",
    "age" : 23
}

// JSON to string 
let str = JSON.stringify(newJSON);
console.log(str);

// string to JSON
let unSTR = JSON.parse(str);
console.log(unSTR);

// EXERCISES
// Task 1
let darthVader = {
    "allegiance" : "empire",
    "weapon" : "lightsabre",
    "sith" : true
}

console.log(darthVader);

//Task 2
console.log(`Darth Vader's allegiance is the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${!darthVader.sith}`);

//Task 3
let myArray = [`everyone`,`hello`];
console.log(`Array length is ${myArray.length}`);
myArray.push(`Gutentag`,`Ola`,`Bonjour`);
console.log(`Array length is now ${myArray.length}`);
myArray.shift();

for (let greeting of myArray){
    console.log(greeting);
}
