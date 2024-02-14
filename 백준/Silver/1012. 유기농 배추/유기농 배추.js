let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const directions = [[-1, 0],[1, 0],[0, 1],[0, -1]];

const testcase = +input.shift();

for (let i = 0; i < testcase; i++) {
  const [M, N, NumberOfCabbage] = input.shift().split(" ").map(Number);
  const cabbages = input.slice(0, NumberOfCabbage);

  console.log(getEarthWormCnt(M, N, cabbages));
    
  input = input.slice(NumberOfCabbage); // next test case
}

function getEarthWormCnt(M, N, cabbages) {
  let earthWorm = 0;
  const visited = Array.from({ length: N }, () => new Array(M).fill(0));

  const dfs = (y, x) => {
    if (x < 0 || y < 0 || x >= M || y >= N) return;
    if (!cabbages.includes(x + " " + y)) return;
    if (visited[y][x]) return;
    visited[y][x] = 1;
    for (let [dy, dx] of directions) {
      dfs(y + dy, x + dx);
    }
  };

  for (let i = 0; i < cabbages.length; i++) {
    const [x, y] = cabbages[i].split(" ").map(Number);
    if (visited[y][x] == 1) continue;
    earthWorm++;
    dfs(y, x);
  }

  return earthWorm;
}
