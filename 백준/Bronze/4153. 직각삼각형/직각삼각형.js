const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
    let i = 0;
    while(true){
        testCase = input[i++].split(' ').map(item=>+item);
        if(testCase[0] === 0 || testCase[1] === 0 || testCase[2] === 0) break;
        let right = ( testCase[0]**2 === testCase[1]**2 + testCase[2]**2 ) || ( 
                    testCase[1]**2 === testCase[0]**2 + testCase[2]**2 ) || (
                    testCase[2]**2 === testCase[0]**2 + testCase[1]**2 )
        console.log(right ? 'right' : 'wrong');
    }
}