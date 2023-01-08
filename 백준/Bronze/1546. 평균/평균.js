const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = {
    T: +input[0],
    arr: input[1].split(' ').map(i=>+i) 
}
solution(testCase);

function solution(testCase){
    const M = Math.max(...testCase.arr); // 
    const newArr = testCase.arr.map(i=>i/M*100);
    const ans = newArr.reduce( function(sum, curValue){ return sum + curValue }, 0 )/testCase.T;
    console.log(ans);
}