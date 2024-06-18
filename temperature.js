const prompt = require ("prompt-sync")();
function findTemp () {
    let celsius = parseInt(prompt("Insert the NUMBER: "))
    let exchange = (celsius * 9/5) + 32;
    return exchange
}
let result = findTemp()
console.log(result)