//charAt
const str = "Hello";
console.log(str.charAt(0)); // Output: "H"
console.log(str.charAt(3)); // Output: "l"
console.log(str.charAt(10)); // Output: ""

//charCodeAt
const str1 = "Hello";
console.log(str.charCodeAt(0)); // Output: 72
console.log(str.charCodeAt(4)); // Output: 111
console.log(str.charCodeAt(10)); // Output: NaN


const str12 = "Hello";
const str2 = "World";
console.log(str1.concat(", ", str2)); // Output: "Hello, World"
console.log(str1.concat("!!!")); // Output: "Hello!!!"
console.log(str1.concat(str2)); // Output: "HelloWorld