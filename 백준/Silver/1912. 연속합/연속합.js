const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = input[0];
const arr = input[1].split(' ').map(i => +i);

let dp = [...arr];

for(let i=1; i<N; i++){
  dp[i] = Math.max(dp[i], dp[i-1]+dp[i])
}
console.log(Math.max(...dp));