const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

input = input.map( (item) => +item );

solution(input[0], input[1]);
function solution(a, b) {
    if(a<b)
    {
        console.log('<');
    }
    if(a>b)
    {
        console.log('>');
    }
    if(a===b)
    {
        console.log('==');
    }
    
}