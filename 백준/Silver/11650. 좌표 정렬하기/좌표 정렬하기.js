const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = {
    N: +input.shift(),
    arr: input.map(i=>i.split(' ').map(i=>+i))
}
solution(testCase);

function solution(testCase){
    testCase.arr.sort((a,b)=>{
        if(a[0]>b[0]){ return 1 }
        else if(a[0]==b[0] && a[1]>b[1]){ return 0 }
        else{ return -1 }
    })
    console.log(testCase.arr.map(i=>i.join(' ')).join('\n'));
}