const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(testCase) {
    for (let i=0; i<=testCase.length; i+=10) {
        console.log( testCase.slice(i, i+10 ) );
    }
}