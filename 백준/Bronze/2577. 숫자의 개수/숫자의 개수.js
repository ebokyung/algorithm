const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(i=>+i);

let testCase = 1;
input.map(i => testCase*=i);
solution(String(testCase));

function solution(testCase) {
    let cnt = 0;
    for (let i=0; i<10; i++) {
        for(let j=0; j<testCase.length; j++) {
            if(testCase[j] == i) cnt++
            else continue;
        }
        console.log(cnt);
        cnt = 0;
    }
}