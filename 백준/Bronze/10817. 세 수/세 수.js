const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(i=>+i);

solution(input);

function solution(testCase) {
    const maxIndex = testCase.indexOf(Math.max(...testCase));
    const minIndex = testCase.indexOf(Math.min(...testCase));
    for(let i=0; i<testCase.length; i++){
        if(i !== maxIndex && i !== minIndex) {
            console.log(testCase[i]);
            break;
        }
    }
}