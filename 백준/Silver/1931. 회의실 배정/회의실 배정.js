const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = +input.shift();
const meeting = input
  .map((m) => m.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
let answer = 1;
let endTime = meeting[0][1];
for (let i = 1; i < N; i++) {
  if (meeting[i][0] >= endTime) {
    endTime = meeting[i][1];
    answer++;
  }
}
console.log(answer);
