/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length
    const n = board[0].length
    const directions = [[-1,0],[1,0],[0,1],[0,-1]]

    const seen = new Set()

    if(m === 1 && n === 1 && board[0][0] === 'X') return;

    const bfs = (cell) => {
        const queue = [cell]
        const region = [cell]
        let isSurround = true

        while(queue.length > 0) {
            const [r, c] = queue.shift()

            for(let [dr, dc] of directions){
                const nr = r + dr
                const nc = c + dc

                if(!board[nr]?.[nc]) {
                    isSurround = false
                    continue;
                }
                if(!seen.has(`${nr},${nc}`) && board[nr][nc] === 'O'){
                    queue.push([nr,nc])
                    region.push([nr,nc])
                    seen.add(`${nr},${nc}`)
                }
            }
        }
        return isSurround ? region : []
    }

    const replaceBoard = (region) => {
        region.forEach(([r,c]) => {
            board[r][c] = 'X'
        })
    }

    for(let r=0; r<m; r++){
        for(let c=0; c<n; c++){
            if(seen.has(`${r},${c}`)) continue

            seen.add(`${r},${c}`)
            if(board[r][c] === 'O') {
                const region = bfs([r,c])
                if(region.length > 0) replaceBoard(region)
            }
        }
    }
    
};

