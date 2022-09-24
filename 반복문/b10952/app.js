const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArr = input.map(i => i.split(' ').map(i=>+i));
solution(testCaseArr);

function solution(testCaseArr) {
    let idx = 0;
    let answer = '';
    while(true){
        const A = testCaseArr[idx][0];
        const B = testCaseArr[idx++][1];
        if( A+B === 0 ) break;
        answer += `${A+B}\n`
    }
    console.log(answer);

}
