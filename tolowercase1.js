const prompt = require("prompt-sync")();
let userinput = prompt("DO YOU WANT A LOAN ? 'YES' OR 'NO':").toLowerCase()

if (userinput === "yes"){
console.log("you can apply for the loan");
}
else {
    console.log("Good bye");
}

