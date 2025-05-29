/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze[0].length
    const n = maze.length

    const queue = [[entrance, 0]]
    const seen = new Set([entrance.toString()])
    const directions = [[0,1],[0,-1],[1,0],[-1,0]]

    while(queue.length > 0) {
        const [curPos, steps] = queue.shift()

        for(let [dx,dy] of directions) {
            const nx = curPos[0] + dx
            const ny = curPos[1] + dy

            // if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            // if((nx == 0 || ny == 0 || nx == n-1 || ny == m-1) && steps !== 0) return steps + 1
            // 출구 조건
            if (!maze[nx]?.[ny]) { // 미로 범위를 벗어난 경우 중
                if(steps) return steps // 시작점이 아닌 경우
                else continue
            }

            if(maze[nx][ny] === '+') continue;
            if(maze[nx][ny] === '.' && !seen.has(`${nx},${ny}`)) {
                queue.push([[nx,ny], steps + 1])
                seen.add(`${nx},${ny}`)
            }
        }
    }

    return -1
};