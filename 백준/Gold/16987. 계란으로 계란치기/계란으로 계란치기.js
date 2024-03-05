const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const N = +n;
const eggs = input.map((egg) => egg.split(" ").map(Number));
let max = Number.MIN_SAFE_INTEGER;

const backtracking = (depth, crushedCnt) => {
  if (depth == N) {
    max = Math.max(max, crushedCnt);
    return;
  }
  if (eggs[depth][0] <= 0) {
    backtracking(depth + 1, crushedCnt);
    return;
  }
  //내구도가 1보다 작은 계란의 개수가 N-1 이상이면, 모든 계란을 제외한 하나의 계란만 남았다는 의미이므로, answer를 N-1로 갱신하고 반환
  if (crushedCnt >= N - 1) {
    max = Math.max(max, N - 1);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (i === depth || eggs[i][0] <= 0) continue;
    eggs[i][0] -= eggs[depth][1];
    eggs[depth][0] -= eggs[i][1];
    if (eggs[i][0] <= 0 && eggs[depth][0] <= 0) backtracking(depth + 1, crushedCnt + 2);
    else if (eggs[i][0] > 0 && eggs[depth][0] > 0) backtracking(depth + 1, crushedCnt);
    else backtracking(depth + 1, crushedCnt + 1);
    eggs[i][0] += eggs[depth][1];
    eggs[depth][0] += eggs[i][1];
  }
};
backtracking(0, 0);
console.log(max);