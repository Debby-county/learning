const prompt = require ("prompt-sync")();
const str = prompt("Enter the word");
let count = 0;
for (let c = 0; c < str.length; c++) {
    if ('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ' .includes(str.charAt(c))) {
        count++;
    }
} 
console.log(count);

    
