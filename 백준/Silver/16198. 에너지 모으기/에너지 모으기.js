const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = +input[0];
let W = input[1].split(' ').map(Number)

let max = Number.MIN_SAFE_INTEGER;
const backtracking = (depth, target) => {
  if(depth == N-2) {
    max = Math.max(max, target)
    return
  }
  for(let i=1; i< W.length-1; i++){
    const x = W[i-1] * W[i+1];
    const left = W.slice(0, i);
    const right = W.slice(i+1);
    const cur = W[i];
    W = [...left, ...right];
    backtracking(depth+1,  target+x);
    W = [...left, cur, ...right];
  }
}
backtracking(0, 0)
console.log(max)