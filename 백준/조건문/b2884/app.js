const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
input = input.map( (item) => +item);

solution(input[0],input[1]);
function solution(H,M) {
    if(M>=45){
        M = M-45;
    } else{
        M = 60-(45-M) ;
        H -= 1;
    }

    if(H<0) {
        H = 23;
    }
    console.log(H,M);
}