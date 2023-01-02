const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const testCase = {
    T: +input[0],
    arr: input.slice(1)
}
solution(testCase);

function solution(testCase) {
    let answer = "";
    for(let i=0; i<testCase.T; i++){
        testLine = testCase.arr[i].split(' ').map(item=>+item);
        const H = testLine[0];
        const N = testLine[2];
        // 층수 : N % H === 0 인 경우 손님은 H층에 머문다.
        const YY = N % H === 0 ? H : N % H;
        // 호수 : N / H 가 딱 떨어지지 않는 경우 올림을 해준다.
        const XX = ( '00' + ( Math.ceil(N / H) ) ).slice(-2);
        answer += YY+XX + '\n';
    }
    console.log(answer);
}