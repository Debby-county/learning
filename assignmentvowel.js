const prompt = require ("prompt-sync")();
const str = prompt("Enter the word");
let count = 0;
for (let i=0; i < str.length; i++) {
    if ('aeiouAEIOU' .includes(str.charAt(i))) {
        count++;
    }
    else {
        console.log("This sentence did not contain a vowel")
    }
}

console.log(count);



            