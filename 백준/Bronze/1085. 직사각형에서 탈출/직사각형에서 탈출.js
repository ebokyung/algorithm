const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

solution(input);

function solution(input) {
    const x = +input[0];
    const y = +input[1];
    const w = +input[2];
    const h = +input[3];
    const newArr = [x, w-x, y, h-y];
    const answer = Math.min(...newArr);
    console.log(answer);
}