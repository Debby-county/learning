const prompt = require ("prompt-sync")();
const str = prompt("Enter the word")
let words = str.split(" ");
let longestword = "";
for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestword.length) {
        longestword = words[i];
    }
}
console.log(longestword);