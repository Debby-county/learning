const prompt = require ("prompt-sync")();
function checkLeapYear(){
    const year = prompt("Enter the number")
    if  ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0))
        {
           console.log (" is a leap year")
        }
        else {
           console.log ("NOT LEAP YEAR")
        }
        
}
checkLeapYear()