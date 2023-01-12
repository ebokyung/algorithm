const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

solution(+input[0], input.slice(1).map(i=>+i));

function solution(K, testCase){
    let arr = [];
    for(let i=0; i<K; i++){
        testCase[i] !== 0 ? arr.push(testCase[i]) : arr.pop();
    }
    let answer = 0;
    arr.map(i=>answer+=i);
    console.log( answer );
}