const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const fstLineArr = input[0].split(' ');
const sndLineArr = input[1].split(' ').map((i)=>+i);
solution(fstLineArr, sndLineArr);

function solution(fstLine, sndLine) {
    const N = +fstLine[0];
    const X = +fstLine[1];
    let answer ='';
    for(let i = 0; i<N; i++){
        if(sndLine[i] >= X) continue;
        answer += `${sndLine[i]} `;
    }
    console.log(answer);
}
