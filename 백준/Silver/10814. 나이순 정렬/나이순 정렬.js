const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = {
    N: +input[0],
    arr: input.slice(1).map(function(item){
        const user = item.split(' ');
        return { age: +user[0], nm: user[1] }
    })
}
solution(testCase);

function solution(testCase){
    testCase.arr.sort((a,b) => {
        if(a.age == b.age) return 0;
        else return a.age - b.age;
    })
    testCase.arr.map(i=>console.log(i.age+' '+i.nm));
}