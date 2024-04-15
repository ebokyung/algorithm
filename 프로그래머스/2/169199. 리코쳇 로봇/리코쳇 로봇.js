function solution(rawBoard) {
    const board = rawBoard.map(r => r.split(''))
    const Y = board.length; // row
    const X = board[0].length; // col
    
    const dirs = [[0,-1],[0,1],[1,0],[-1,0]]
    const bfs = () => {
        const queue = []
        const visited = Array.from({length: Y}, () => new Array(X).fill(-1))

        board.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                if(col === 'R') {
                    queue.push([rowIdx, colIdx])
                    visited[rowIdx][colIdx] = 0
                }
            })
        })
        
        while(queue.length){
            const [y,x] = queue.shift();
            if(board[y][x] === 'G') return visited[y][x]
            
            for(let [dy, dx] of dirs){
                let [ny, nx] = [y, x];
                // 미끄러지는 거 
                while(true){
                    ny += dy
                    nx += dx
                    if(ny >= Y || ny < 0 || nx >= X || nx < 0 || board[ny][nx] === 'D') {
                        ny -= dy
                        nx -= dx
                        break;
                    }
                }
                if(visited[ny][nx] === -1) {
                    queue.push([ny, nx])
                    visited[ny][nx] = visited[y][x] + 1
                }
            }
        }
        return -1;

    }
    return bfs()
}

// 문제 이해;; 벽이나 끝에 부딪힐 때까지 "미끄러짐"
// 1. 상하좌우로 이동이니까 dfs/bfs
// 2. 