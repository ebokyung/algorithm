const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const A = input[1].split(" ").map(Number);

let left = 0;
let right = n - 1;
const target = 0;

let answer = A[left] + A[right];
while (left < right) {
  const mix = A[left] + A[right];
  if (Math.abs(answer) > Math.abs(mix)) answer = mix;
  if (mix < target) left++;
  else right--;
}
console.log(answer);
