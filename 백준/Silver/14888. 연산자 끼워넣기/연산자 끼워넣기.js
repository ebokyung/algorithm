const [N, nums, operatorCnt] = require('fs').readFileSync('/dev/stdin').toString().split("\n").map((i) => i.split(" ").map(Number));

const operators = ["+", "-", "*", "/"];
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

const backtracking = (depth, num, operatorCnt) => {
  if (depth === N - 1) {
    if (min > num) min = num;
    if (max < num) max = num;
    return;
  }
  for (let i = 0; i < 4; i++) {
    if (operatorCnt[i]) {
      operatorCnt[i] -= 1;
      if (operators[i] === "+") {
        backtracking(depth + 1, num + nums[depth + 1], operatorCnt);
      }
      if (operators[i] === "-") {
        backtracking(depth + 1, num - nums[depth + 1], operatorCnt);
      }
      if (operators[i] === "*") {
        backtracking(depth + 1, num * nums[depth + 1], operatorCnt);
      }
      if (operators[i] === "/") {
        const temp = Math.floor(Math.abs(num) / nums[depth + 1]);
        const result = num < 0 ? temp * -1 : temp;
        backtracking(depth + 1, result, operatorCnt);
      }
      operatorCnt[i] += 1;
    }
  }
};
backtracking(0, nums[0], operatorCnt);
console.log(max ? max : 0);
console.log(min ? min : 0);