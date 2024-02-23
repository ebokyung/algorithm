const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const N = +input[0];
const [fromR, fromC, toR, toC] = input[1].split(" ").map(Number);

const direction = [[-2, -1],[-2, 1],[0, -2],[0, 2],[2, -1],[2, 1]];

const bfs = () => {
  const move = Array.from({ length: N }, () => new Array(N).fill(0));
  const visited = Array.from({ length: N }, () => new Array(N).fill(false));
  const queue = [[fromR, fromC]];

  while (queue.length) {
    const [y, x] = queue.shift();
    if (y === toR && x === toC) {
      console.log(move[y][x]);
      return;
    }
    for (let i = 0; i < direction.length; i++) {
      const [dy, dx] = direction[i];
      const nextY = y + dy;
      const nextX = x + dx;
      if (nextY >= N || nextY < 0 || nextX >= N || nextX < 0) continue;
      if (!visited[nextY][nextX]) {
        visited[nextY][nextX] = true;
        move[nextY][nextX] = move[y][x] + 1;
        queue.push([nextY, nextX]);
      }
    }
  }
  console.log(-1);
};
bfs();