const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = {
    T: input[0],
    arr: input.slice(1),
}
solution(testCase);

function solution(testCase) {
    let answer = '';
    for(let i=0; i<testCase.T; i++){
        const test = testCase.arr[i].split(' ');
        let repeat = test[0];
        let str = test[1];
        for(let char of str){
            for(let j=0; j<repeat; j++){
                answer += char;
            }
        }
        answer += '\n';
    }
    console.log(answer);
}