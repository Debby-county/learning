const prompt = require ("prompt-sync")();
const str = prompt("Enter the word");
let word = str.split(" ");
let longestword = "";
for (let i = 0; i < word.length; i++) 
    if (word[i].length > longestword.length){
        longestword = word[i];
    }

let words = str.split(" ");
let smallestword = words[0];
for (let s = 1; s < words.length; s++) 
    if (words[s].length < smallestword.length){
        smallestword = words[s];
    }

console.log("The longest word is =",longestword);
console.log("The smallest word is =",smallestword);