const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

solution(input);

function solution(testCase) {
    let N = 1;
    let newNum = testCase;
    while(true){
        const num = Math.floor(newNum / 10) + newNum % 10;
        newNum = Number(String(newNum % 10) + String(num % 10));
        if(testCase == newNum) break;
        else N++;
    }
    console.log(N);
}