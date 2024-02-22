const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map((i) => i.split(" ").map(Number));
const [N, M] = input.shift();
const ladder = new Map();
const snake = new Map();
input.slice(0, N).forEach((xy) => ladder.set(xy[0], xy[1]));
input.slice(N).forEach((uv) => snake.set(uv[0], uv[1]));

function bfs() {
  // let cnt = 0; // 100에 도착할 때 까지 모든? 노드들을 돌아보기 때문에 숫자에 바로 누적 x
  const cnt = new Array(101).fill(0); // 해당 칸에 방문하기까지 누적 횟수
  const visited = new Array(101).fill(false); // 방문 여부
  const queue = [1];

  while (queue.length) {
    const curPosition = queue.shift();
    if (curPosition == 100) {
      console.log(cnt[100]);
      break;
    }
    for (let i = 1; i <= 6; i++) {
      let nextPosition = curPosition + i;
      if (nextPosition > 100) continue;
      if (ladder.has(nextPosition)) nextPosition = ladder.get(nextPosition);
      if (snake.has(nextPosition)) nextPosition = snake.get(nextPosition);
      if (!visited[nextPosition]) {
        visited[nextPosition] = true;
        cnt[nextPosition] = cnt[curPosition] + 1;
        queue.push(nextPosition);
      }
    }
  }
}

bfs();