const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n,m] = input.shift().split(' ').map(i=>+i);

let graph = { };
for(let i=1; i<=n; i++){
  graph[i] = [];
}
for(let i=0; i<m; i++){
  let [a,b] = input[i].split(' ').map(i=>+i);
  graph[a].push(b);
  graph[b].push(a);
}


let visited = new Array(n+1).fill(false);
let cnt = 0;
const dfs = (start) => {
  visited[start] = true;

  for (let i = 0; i < graph[start].length; i++) {
      const next = graph[start][i];

      if (!visited[next]) {
          dfs(next);
      }
  }
};

for(let i=1; i<=n; i++){
  if (!visited[i]) { dfs(i); cnt++;}
}

console.log(cnt);