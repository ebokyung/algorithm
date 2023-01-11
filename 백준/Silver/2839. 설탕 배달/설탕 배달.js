const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

solution(+input);

function solution(N){
    let cnt3kg = 0;
    while(true){
        if(N%5 == 0){ //1
            console.log( N/5 + cnt3kg);
            break;
        }
        
        if(N < 0){    //2
            console.log(-1);
            break;
        }
        
        cnt3kg += 1;
        N -= 3;
    }
}