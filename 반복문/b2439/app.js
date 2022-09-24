const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
    let answer ='';
    for(let i=1; i<=N; i++){
        for(let j=N-1; j>=i; j--){
            answer += ' ';
        }
        for(let k=1; k<=i; k++){
            answer += '*'
        }
        answer += '\n';
    }
    console.log(answer);
}
