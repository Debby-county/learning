const prompt = require ("prompt-sync")();
const str = prompt("Enter the word");
let vowelcount = 0;
for (let cv=0; cv < str.length; cv++) 
    if ('aeiouAEIOU' .includes(str.charAt(cv))){
        vowelcount++;
    }

    let consonantcount = 0;
    for (let cv=0; cv < str.length; cv++)
    if ('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ' . includes(str.charAt(cv))) {
        consonantcount++;
        }


console.log("the vowel is =" , vowelcount)
console.log("the consonant is =" , consonantcount)