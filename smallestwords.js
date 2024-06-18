let str = "Hello world and universe"{
let words = str.split(" ");
let smallestword = "";
for (let s = 1; s < words.length; s++) {
    if (words[s].length < smallestword.length) {
        smallestword = words[s];
    }
}
console.log(smallestword);
}
