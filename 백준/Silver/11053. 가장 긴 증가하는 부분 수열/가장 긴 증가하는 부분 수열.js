const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let N = input[0];
let arr = input[1].split(' ').map(i=>+i);

const dp = new Array(N).fill(1);
for (let i = 1; i < N; i++) {
  const values = [1];
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      values.push(dp[j] + 1);
    }
  }
  dp[i] = Math.max(...values);
}

console.log(Math.max(...dp));