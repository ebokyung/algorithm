const [n, ...triangle] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const memo = triangle.map((row) => row.split(" "));

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let max = 0;
    if (j - 1 < 0) max = +memo[i - 1][j];
    else if (j == i) max = +memo[i - 1][j - 1];
    else max = Math.max(+memo[i - 1][j - 1], +memo[i - 1][j]);
    memo[i][j] = +memo[i][j] + max;
  }
}

console.log(Math.max.apply(null, memo[n - 1]));