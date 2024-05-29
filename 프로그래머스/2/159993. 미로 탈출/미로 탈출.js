function solution(maps) {
    let answer = 0;
    const row = maps.length;
    const col = maps[0].length;

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    const BFS = (y, x, target) => {
        // 시작점에서 레버, 레버에서 도착점 각각 구해야 하므로 visited는 각각의 BFS가 실행될 때 초기화 되어야 함
        let visited = Array(row).fill().map(() => Array(col).fill(false));

        let queue = [];
        // 시작점의 방문 처리, 그리고 큐에 넣어주기
        visited[y][x] = true;
        queue.push([y, x, 0]); // [행 번호, 열 번호, 지금까지의 누적 거리]

        while (queue.length > 0) {
            const [curY, curX, cnt] = queue.shift();

            if (maps[curY][curX] === target) {
                return cnt;
            }

            // 네 방향 탐색
            for (let i = 0; i < 4; i++) {
                const ny = curY + dy[i];
                const nx = curX + dx[i];

                // 새로운 인덱스가 맵의 범위를 넘지 않으면서
                if(ny < 0 || ny >= row || nx < 0 || nx >= col) continue;
                // 방문한 적이 없고 벽이 아닌 경우
                if(!visited[ny][nx] && maps[ny][nx] !== 'X'){
                    visited[ny][nx] = true; // 방문처리
                    queue.push([ny, nx, cnt+1]); // 큐에 새로운 인덱스와 누적 거리 담기
                }
            }
        };
    }

    // 시작지점을 찾으면 너비우선탐색 실행
   for (let i = 0; i < row; i++) {
       for (let j = 0; j < col; j++) {
          // S to L
          if (maps[i][j] === "S") {
            answer += BFS(i, j, "L");
          }
          // L to E
          else if (maps[i][j] === "L") {
            answer += BFS(i, j, "E");
          }
        }
    }
        
  return answer ? answer : -1;
}