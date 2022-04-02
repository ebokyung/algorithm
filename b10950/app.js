const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');
const arr = input.slice(1);

solution(input[0], arr);

function solution(T, arr) {
    for (let i =0; i<T; i++){
        arr[i] = arr[i].split(' ').map(item => +item);
        console.log(arr[i][0] + arr[i][1]);
    }
}