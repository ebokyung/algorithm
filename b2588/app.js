const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');

input = input.map((item) => +item);

solution(input[0], input[1]);

// function solution(A, B) {
//     console.log(A * (B%10));
//     console.log(A * Math.floor(((B%100)/10)));
//     console.log(A * Math.floor((B/100)));
//     console.log(A * B);
// }

function solution(A, B) {
    const stringB = String(B);
    const one = +stringB[2];
    const ten = +stringB[1];
    const hundred = +stringB[0];
    console.log(A * one);
    console.log(A * ten);
    console.log(A * hundred);
    console.log(A * B);
}