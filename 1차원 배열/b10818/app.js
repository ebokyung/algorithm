const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
const testCaseArr = input[1].split(' ').map(i => +i);
solution(N, testCaseArr);

function solution(N, testCaseArr) {
//    console.log(N, testCaseArr);
//    let min = 1000001;
//    let max = -1000001;
//     for(let i = 0; i < N; i++){
//         let temp = testCaseArr[i];
//         if( temp < min ) min = temp;
//         if( temp > max ) max = temp;
//     }
//     console.log(`${min} ${max}`);
    const sortedArr = testCaseArr.sort((a,b) => a-b);
    console.log(sortedArr[0], sortedArr[N-1]);
}
