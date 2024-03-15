const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const city = input.slice(1).map((line) => line.split(' ').map(Number));
const house = [];
const chicken = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 1) house.push([i, j]);
    else if (city[i][j] === 2) chicken.push([i, j]);
  }
}

const getMinDistance = () => {
  let sum = 0; // 모든 집들의 치킨 거리의 합
  house.forEach(([hx, hy]) => { // 집마다 가장 가까운 치킨집과의 거리를 구한다.
    let min = Number.MAX_SAFE_INTEGER;
    for(let idx in chicken){ 
      if (visited[idx]) {
        const [cx, cy] = chicken[idx];
        const distance = Math.abs(hx - cx) + Math.abs(hy - cy);
        min = Math.min(min, distance);
      }
    };
    sum += min; 
  });
  return sum;
};

const visited = new Array(chicken.length).fill(false);
let answer = Number.MAX_SAFE_INTEGER;

const dfs = (cnt, idx) => {
  if (cnt === M) {
    answer = Math.min(answer, getMinDistance());
    return;
  } else {
    for (let i = idx; i < chicken.length; i++) {
      if(!visited[i]){
        visited[i] = true;
        dfs(cnt + 1, i);
        visited[i] = false;
      }
    }
  }
};

dfs(0, 0);
console.log(answer);