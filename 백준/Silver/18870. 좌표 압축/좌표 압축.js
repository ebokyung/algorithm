const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let n = input[0];
let arr = input[1].split(' ').map(i=>+i);

let sorted = [...arr].sort((a,b) => a-b);
let setArr = Array.from(new Set(sorted));
let obj = {};
setArr.forEach((item, idx) => obj[item] = idx);

let answer = [];
for(let i=0; i<n; i++){
  answer.push(obj[arr[i]]);
}
console.log(answer.join(' '));