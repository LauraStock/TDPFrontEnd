/* 
    ! SCOPE
    * two main kinds
    * LOCAL and GLOBAL
    
    ? LOCAL
    Function scope
    variables declared inside a function
    cannot be accessed from outside of that function
    if you try to reference them it will produce an error
    ! ReferenceError
*/

function foo() {
    let bar = `Hello world!`;
}

foo();

//console.log(bar);

// ? BLOCK SCOPE

// anything declared inside a block cannot be accessed outside the block

{
   let x = 1; 
}

//console.log(x);

// if you use 'var'
// we can access the variable outside of the block

{
    var y = 2;
}

console.log(y);

/*
    ? GLOBAL SCOPE
    * Automatically Global
    * if we don't declare a variable but reference it in a function
    * it gets created and added to the global scope
    * this is bad practice
*/

function globalScope() {
    greeting = `hello`;
}

globalScope();

console.log(greeting);

// * Standard Global
// * declaring a variable outside of a block
// * it can be accessed from anywhere

let a = `a`;

console.log(a);

function b() {
    console.log(`this is the letter ${a}`);
}

b();

/*
    ? How JS Looks for Variablse
    * local (inside the block)
    * global (outside the block)
    * if none exists then it is added to global scope
*/

// EXERCISES
// Task 1
function task1(){
    let x = `foo`;
    if (x){
        let y = `bar`;
    } 
    console.log(`x is ${x}`);
    console.log(`y is ${y}`);
}
task1()

// Task 2
function doSomething() {
    console.log(a);
    console.log(foo());
    let a = 1;
    function foo() {
      return 2;
    }
}
doSomething(); // Reference error created as cannot access variables and functions before they are declared.