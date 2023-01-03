const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = {
    N: input[0],
    arr: input.slice(1)
}
solution(testCase);

function solution(testCase) {
    for(let i=0; i<testCase.N; i++) {
        let score = 0;
        let right = testCase.arr[i].split('X');
        for(let j=0; j<right.length; j++){
            score += recursive(right[j].length);
        }
        console.log(score);
        score =0;
    }
}

function recursive(n){
    if (n == 0) {
        return 0
    } else {
        return n + recursive(n-1);
    }
}