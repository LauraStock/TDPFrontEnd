// FIZZ BUZZ 

/*
    * Write a program that will console log integers 1 to 100
    * but print “Fizz” if an integer is divisible by 3
    * “Buzz” if an integer is divisible by 5
    * and “FizzBuzz” if an integer is divisible by both 3 and 5
*/

for (i=1; i<=100; i++){
    let str = "";
    if (i%3==0){
        str = "Fizz";
    } 
    if (i%5==0){
        str = str + "Buzz";
    }
    console.log(!str ? i : str);
}

// 99 BOTTLES OF BEER
for (i=99; i>0;i--){  
    if (i==1)
    {
        console.log(`${i} bottle of beer on the wall, ${i} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall`);
    }else{
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottles of beer on the wall`);
    }
}
console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
