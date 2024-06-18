const prompt = require ("prompt-sync")();
function findNaira() {
    const dollar = prompt("Enter the number")
    let naira = 1500
    let money = naira * dollar;
    return money 
}
let result = findNaira()
console.log(result)