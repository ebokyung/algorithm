/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length
    const n = grid[0].length
    const directions = [[-1,0],[1,0],[0,1],[0,-1]]

    const seen = new Set()
    let islands = 0

    const bfs = (curPos) => {
        const queue = [curPos]

        while(queue.length > 0) {
            const [curRow, curCol] = queue.shift()

            for(let [dr, dc] of directions){
                const nr = curRow + dr
                const nc = curCol + dc

                if(!grid[nr]?.[nc]) continue;
                if(seen.has(`${nr},${nc}`)) continue;
                
                if(grid[nr][nc] === "1"){
                    queue.push([nr,nc])
                    seen.add(`${nr},${nc}`)
                }
            }
        }
    }

    for(let r=0; r<m; r++){
        for(let c=0; c<n; c++) {
            if(grid[r][c] === "1" && !seen.has(`${r},${c}`)){
                islands++
                bfs([r,c])
            }
        }
    }

    return islands
    
};