// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\r\n');
// --> fs모듈로 하면 오류나는 문제;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input =[];

rl.on('line', function(line){
    input.push(line);
}).on('close', function() {
    input = input.map((item)=>+item);
    solution(input[0],input[1]);
    process.exit();
})

function solution(x,y) {
    let ans = 0;
    if(x>0 && y>0){
        ans = 1;
    } 
    if (x<0 && y>0) {
        ans = 2;
    }
    if (x<0 && y<0) {
        ans = 3;
    } 
    if (x>0 && y<0) {
        ans = 4;
    }
    console.log(ans);
}