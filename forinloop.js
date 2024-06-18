const obj = {a: 1, b: 4, c: 7};
 
for (let prop in obj) {
  console.log(prop + ': ' + obj[prop]);
}

const sub = {a: 5, b: 7, c:9};

for (let prop in obj) {
    console.log(prop + ":" + sub[prop]);
}