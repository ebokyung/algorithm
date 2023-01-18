const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let [N,A,M,B] = input.map(i=> i.split(' ').map(j=>+j));

const myMap = new Map();
A.forEach(i => {
    if(myMap.has(i)) myMap.set(i, myMap.get(i)+1);
    else myMap.set(i, 1);
})

let answer = [];

B.forEach(i => {
    if(myMap.has(i)) answer.push(myMap.get(i));
    else answer.push(0);
})

console.log(answer.join(' '));