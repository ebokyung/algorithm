const [N, M] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

function solution(N, M) {
  let result = "";
  const visited = new Array(N).fill(false);
  const seq = new Array(M).fill("");

  const dfs = (m) => {
    if (m > M) return;
    if (m === M) {
      const leaf = [...seq].slice(0, m);
      result += `${leaf.join(" ")}\n`;
    }
    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        seq[m] = i + 1;
        dfs(m + 1);
        visited[i] = false; // ** back
      }
    }
  };

  dfs(0);
  return result;
}

console.log(solution(N,M));