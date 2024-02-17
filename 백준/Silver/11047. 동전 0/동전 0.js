const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, K] = input.shift().split(" ").map(Number);
const Ai = input.map(Number).sort((a, b) => b - a);

let cnt = 0;
let temp = K;
for (let i of Ai) {
  if (temp === 0) break;
  if (Math.floor(temp / i) > 0) {
    cnt += Math.floor(temp / i);
    temp = temp % i;
  }
}
console.log(cnt);