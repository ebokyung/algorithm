function solution(land) {
  const n = land.length;
  const m = land[0].length;
  let visited = Array.from({ length: n }, () => Array(m).fill(-1));
  let area = { '-1': 0 };

  function dfs(y, x, areaNum) {
      let q = [[y, x]];
      visited[y][x] = areaNum;

      const dy = [1, -1, 0, 0];
      const dx = [0, 0, 1, -1];
      let cnt = 1;

      while (q.length > 0) {
          const [cy, cx] = q.shift();
          for (let i = 0; i < 4; i++) {
              const ny = cy + dy[i];
              const nx = cx + dx[i];
              if( ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
              if (land[ny][nx] === 1 && visited[ny][nx] === -1) {
                  q.push([ny, nx]);
                  visited[ny][nx] = areaNum;
                  cnt += 1;
              }
          }
      }
      return cnt;
  }

  let num = 1;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (visited[i][j] === -1 && land[i][j] === 1) {
              area[num] = dfs(i, j, num);
              num++;
          }
      }
  }

  let result = 0;
  for (let i of zip(visited)) {
      let temp = 0;
      for (let j of new Set(i)) {
          temp += area[j];
      }
      result = Math.max(result, temp);
  }
  return result;
}

function zip(arr) {
  return arr[0].map((_, c) => arr.map(row => row[c]));
}