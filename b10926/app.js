const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

input = input.trim(); //앞뒤 공백제거 필수,,
solution(input);

function solution(input) {
    console.log(`${input}??!`);
}