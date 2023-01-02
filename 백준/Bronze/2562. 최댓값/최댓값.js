const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCase = input.map(i => +i);
solution(testCase);

function solution(testCase) {
   let max = testCase[0];
   let idx = 0;
   for(let i=0; i<testCase.length; i++){
        if(testCase[i] >= max) {
            max=testCase[i]
            idx = i;
        }
   }
   console.log(max);
   console.log(idx+1);
}
