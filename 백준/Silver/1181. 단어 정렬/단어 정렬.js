const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = {
    T: +input[0],
    set: new Set(input.slice(1)) //중복 없애기 객체타입
}
solution(testCase);

function solution(testCase){
    const arr = [...testCase.set];
    arr.sort();//알파벳순으로 정렬
    arr.sort(function(a,b){ //문자열 길이순으로 정렬
        if(a.length>b.length) return 1;
        if(a.length===b.length) return 0;
        else return -1;
    });
    console.log(arr.join('\n'));
}