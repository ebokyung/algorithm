const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = {
    N: +input[0],
    arr: input[1].split(' ')
}
solution(testCase);

function solution(testCase){
    let primeCnt = testCase.N;
    for(let i=0; i<testCase.N; i++){
        const num = testCase.arr[i];
        if(num == 1) { primeCnt-=1; continue;}
        for(let j=2; j*j<=num; j++){
            if(num%j == 0) { primeCnt-=1; break;}
        }
    }
    console.log(primeCnt);
}