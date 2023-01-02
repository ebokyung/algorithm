const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const testCase = {
    x: +input[0],
    y: +input[1],
    w: +input[2],
    h: +input[3],
}
solution(testCase);

function solution(testCase) {
    let answer = "";
    const heightMinusY = testCase.h - testCase.y;
    const widthMinusX = testCase.w - testCase.x;
    const newArr = [testCase.x, testCase.y, heightMinusY, widthMinusX];
    let min = testCase.x;
    for(let i=0; i<newArr.length; i++){
        if(min >= newArr[i]) {
            min = newArr[i];
        }
    }
    answer = min;
    console.log(answer);
}