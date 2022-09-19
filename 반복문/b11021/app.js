const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');

solution(input);

function solution(arr) {
    let T = +arr[0];
    let answer = '';
    for (let i = 1; i <= T; i++) {
        newArr = arr[i].split(' ').map(item => +item);
        //console.log(newArr[0] + newArr[1]); 시간초과
        answer += `Case #${i}: ${newArr[0] + newArr[1]}\n`;
    }
    console.log(answer);
}