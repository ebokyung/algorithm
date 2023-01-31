const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require('fs').readFileSync(filePath).toString().trim().split("\n");
let [n,m,v] = input.shift().split(' ');

let graph = { };
for(let i=1; i<=n; i++){
    graph[i] = []
}
for(let i=0; i<m; i++){
    const [a,b] = input[i].split(' ').map(v=>+v);
    graph[a].push(b);
    graph[b].push(a);
}
for(let i=1; i<=n; i++){
  graph[i].sort((a,b) => a-b);
}

//깊이탐색
const dfs = (graph, startNode) => {
  let visitedQueue = []; // 탐색을 마친 노드들
  let needVisitStack = []; // 탐색해야할 노드들

  needVisitStack.push(startNode); // 노드 탐색 시작

  while (needVisitStack.length !== 0) { // 탐색해야할 노드가 남아있다면
    const node = needVisitStack.shift(); 
    if (!visitedQueue.includes(node)) { // 해당 노드가 탐색된 적 없다면
      visitedQueue.push(node); 
      needVisitStack = [...graph[node], ...needVisitStack];
    }
  }
  return visitedQueue;
};

console.log(dfs(graph, +v).join(' '));

//너비탐색
const bfs = (graph, startNode) => {
  let visitedQueue = []; // 탐색을 마친 노드들
  let needVisitQueue = []; // 탐색해야할 노드들

  needVisitQueue.push(startNode); // 노드 탐색 시작

  while (needVisitQueue.length !== 0) { // 탐색해야할 노드가 남아있다면
    const node = needVisitQueue.shift(); 
    if (!visitedQueue.includes(node)) { // 해당 노드가 탐색된 적 없다면
      visitedQueue.push(node); 
      needVisitQueue = [...needVisitQueue, ...graph[node]];
    }
  }
  return visitedQueue;
};

console.log(bfs(graph, +v).join(' '));