const prompt = require ("prompt-sync")();
/*function minusNumber(a,b) {
    const minus = a - b;
    return minus;
}
let result = minusNumber(1000,350);
console.log(result)*/


function evenOdd (){
    const numbers = prompt("Enter the word")
    if (numbers % 2  === 1) {
    console.log( "This number is an Odd number")
    }
    else {
        console.log(" The number given is even number ")
    }

}
evenOdd()