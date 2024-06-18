const prompt = require ("prompt-sync")();
const str = prompt("Enter the word")
let words = str.split(" ");
let shortestword = words[0];
for (let s = 1; s < words.length; s++) {
    if (words[s].length < shortestword.length) {
        shortestword = words[s];
    }
    console.log(shortestword);
}

