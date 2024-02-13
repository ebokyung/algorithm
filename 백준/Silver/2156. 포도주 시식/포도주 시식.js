const [n, ...wine] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

const dp = new Array(n + 1).fill(0);
dp[1] = wine[0];
dp[2] = wine[0] + wine[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(dp[i - 3] + wine[i - 2] + wine[i - 1], dp[i - 2] + wine[i - 1]); // 현재 와인을 마시는 경우 중 나은 경우
  dp[i] = Math.max(dp[i - 1], dp[i]); // 아니면 현재 와인은 마시지 않는 경우가 나은지
}
console.log(dp[n]);