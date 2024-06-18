const prompt = require ("prompt-sync")();
const English = parseFloat(prompt("Enter your English score: "))
const Mathematics = parseFloat(prompt("Enter your Mathematics score: "))
const Economics = parseFloat(prompt("Enter your Economics score: "))
const civic = parseFloat(prompt("Enter your Civic score: "))
const Computer = parseFloat(prompt("Enter your Computer score: "))

let totalScore = Mathematics + English + Economics + civic 
let Average = totalScore / 5
console.log ("Your Average Score is :" + Average)
if ( Average >= 70) { 
    console.log ("you have admission to federal university")
}
else if( Average >= 69) { 
    console.log("you have admission to state university")
}
else if( Average >= 59) {
     console.log("you have admission to polytechnics")}

else {

     console.log("you have admission to Technical schools")}







