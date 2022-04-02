const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
input = input.map(item => +item);

solution(input[0], input[1], input[2]);
function solution(a,b,c) {
    let result=0;
    if(a === b && a === c){  //다 같을때
        result = 10000+a*1000;
    }
    if(a != b && a != c && b != c){  //다 다를때
        let arr = [a,b,c].sort();
        result = arr[2]*100;
    }
    if(a != b || a != c || b != c){
        if(a==b || a==c) result = 1000+a*100;
        if(b==c) result = result = 1000+b*100;
    }
    console.log(result);
}