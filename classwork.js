const prompt = require ("prompt-sync")();

let Palindrome= prompt ("Enter a word")

const formattedstr =Palindrome.toLowerCase().replace(/[ ]/,);

const reversedStr = formattedstr.split(" ").reverse().join(" ");
 
if(formattedstr === reversedStr ){
    console.log("This word is an Palindrome") 
}
 
else{
    console.log("it is not an Palindrome") 
} 