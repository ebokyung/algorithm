const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(i=>+i);

solution(input);

function solution(testCase) {
    console.log(testCase.sort((a,b)=> a-b)[1]);
}