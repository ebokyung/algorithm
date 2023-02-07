const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let arr = require('fs').readFileSync(filePath).toString().trim().split('\n').map(i=>+i);
let n = arr[0];

function solution(n, arr){
  let stack = [1];
  let result = '';
  let cnt=1;

  for(let i=1; i<=n; i++){
    while(cnt <= arr[i]){
      result += '+ ';
      stack.push(cnt++);
    }
    let popItem = stack.pop();
    if(popItem == arr[i]){
      result += '- ';
    } else {
      return 'NO';
    }
  }
  
  return result;
}

let answer = solution(n, arr);
console.log(answer);