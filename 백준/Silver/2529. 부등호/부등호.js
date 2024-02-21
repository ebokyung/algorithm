const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const k = parseInt(input[0]);
const inequalize = input[1].split(" ");

let min = 100 ** k;
let max = 0;

function backtracking(depth, i, str) {
  if (str.length == k + 1) {
    if (parseInt(min) > parseInt(str)) min = str;
    if (parseInt(max) < parseInt(str)) max = str;
    return;
  }

  if (inequalize[depth] === "<") {
    for (let j = i + 1; j <= 9; j++) {
      if (str.includes(j)) continue;
      backtracking(depth + 1, j, str + j);
    }
  }
  if (inequalize[depth] === ">") {
    for (let j = 0; j < i; j++) {
      if (str.includes(j)) continue;
      backtracking(depth + 1, j, str + j);
    }
  }
}
for (let i = 0; i <= 9; i++) {
  backtracking(0, i, `${i}`);
}
console.log(max);
console.log(min);