const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);

let answer = -1;

const isPerfectSquareNumber = (S) => {
  const s = parseInt(S);
  return Math.pow(parseInt(Math.sqrt(s)), 2) === s;
};

for (let i = 0; i < N; i++) { // 시작 x좌표
  for (let j = 0; j < M; j++) { // 시작 y좌표
    for (let row = -N; row < N; row++) { // 행의 등차
      for (let col = -M; col < M; col++) { // 열의 등차
        if (row === 0 && col === 0) continue;
        let S = '';
        let x = i;
        let y = j;
        while (true) {
          if(x < 0 || x >= N || y < 0 || y >= M) break;
          S += board[x][y];
          if (isPerfectSquareNumber(S)) {
            answer = Math.max(answer, parseInt(S));
          }
          x += row;
          y += col;
        }
      }
    }
  }
}

console.log(answer);