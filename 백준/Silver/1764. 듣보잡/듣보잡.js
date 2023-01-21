const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [NM, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = NM.split(' ').map(i=>+i);
let min = Math.min(N,M);
let max = 0;
let arrA=[], arrB=[];
if(min == N){
    max = M;
     arrA = arr.slice(0, N);
     arrB = arr.slice(N);
} else {
    max = N;
     arrA = arr.slice(N);
     arrB = arr.slice(0, N);
}

const myMap = new Map();
for(let i=0; i<min; i++){
    myMap.set(arrA[i], 1);
}
for(let i=0; i<max; i++){
    if(myMap.has(arrB[i])) myMap.set(arrB[i], myMap.get(arrB[i])+1 );
}

let answer = [];
for(let [key, value] of myMap){
    if(value > 1) answer.push(key);
}
console.log(`${answer.length}\n${answer.sort().join('\n')}` );