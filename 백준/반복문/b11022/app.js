const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(arr) {
    const T = +arr[0];
    let answer = '';
    for (let i=1; i<=T; i++){
        tempArr = arr[i].split(' ').map((i)=>+i);
        const A = tempArr[0];
        const B = tempArr[1];
        answer += `Case #${i}: ${A} + ${B} = ${A+B}\n`;
    }
    console.log(answer);
}