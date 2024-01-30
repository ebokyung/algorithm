const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
    let answer ='';
    for(let i=1; i<=N; i++){
        for(let j=1; j<=i; j++){
            answer += '*';
        }
        answer += '\n';
    }
    console.log(answer);
}
