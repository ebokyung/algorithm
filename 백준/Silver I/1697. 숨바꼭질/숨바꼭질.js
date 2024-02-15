const [N, K] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

function bfs(N, K) {
  const queue = [];
  queue.push([N, 0]);
  const visited = Array.from({ length: 100001 }, () => 0);
  visited[N] = 1;

  while (queue.length) {
    const [cur, time] = queue.shift();
    if (cur === K) return time;
    for (next of [cur - 1, cur + 1, cur * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        visited[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(bfs(N, K));