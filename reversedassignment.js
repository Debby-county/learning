const prompt = require ("prompt-sync")();
const str = prompt("Enter a sentence")
const words = str.split (" ");
console.log(words)

const reversedwords = words.reverse();
console.log(reversedwords)

for (let reversedwords = str.length - 1; reversedwords>= 0; reversedwords--) {
    words += str[reversedwords];
}