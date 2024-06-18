const prompt = require ("prompt-sync")();
function findNaira() {
    const naira = prompt("Enter the number" )
    let dollar = 0.001
    let money = dollar * naira;
    return money 
}
let result = findNaira()
console.log(result)   