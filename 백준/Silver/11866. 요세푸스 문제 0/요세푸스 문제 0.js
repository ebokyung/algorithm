const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

solution(+input[0], +input[1]);

function solution(N,K){
    let answer = [];
    let queue = [];
    let c = 0;
    for(let i=0; i<N; i++) queue[i] = i+1;

    while(queue.length){
        if((c+1)%K == 0) { 
            answer.push(queue.shift());
            c = 0;
        } else {
            queue.push(queue.shift());
            c++; 
        }
    }
    
    console.log(`<${answer.join(', ')}>`);
}