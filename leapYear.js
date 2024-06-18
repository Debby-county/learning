const prompt = require ("prompt-sync")();
let year = parseInt(prompt("enter a year: "))

if  ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0))
{
   console.log (" is a leap year")
}
else {
   console.log ("NOT LEAP YEAR")
}
