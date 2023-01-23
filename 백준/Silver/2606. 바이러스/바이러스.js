const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [C, N, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

let graph = { };
for(let i=1; i<=C; i++){
    graph[i] = []
}
for(let i=0; i<N; i++){
    const [a,b] = arr[i].split(' ').map(v=>+v);
    graph[a].push(b);
    graph[b].push(a);
}

const bfs = (graph, startNode) => {
    let visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들
  
    needVisit.push(startNode); // 노드 탐색 시작
  
    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
      const node = needVisit.pop(); 
      if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
        visited.push(node); 
        needVisit = [...needVisit, ...graph[node]];
      }
    }
    return visited;
  };
  
  console.log(bfs(graph, 1).length-1);