/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    // curr에서 갈 수 있는 방향 다 탐색하다가 먼저 end 나오면 끝, 즉 bfs
    // 이동범위: 주사위 1~6 이동 + 사다리 or 뱀 
    // 짝수 row는 오른쪽으로 이동, 홀수 row는 왼쪽으로 이동
    // *포인트) 숫자로 위치 찾기  ex. 35 -> (0,1), 13 -> (3,0)

    let n = board.length;
    let seen = new Set();

    let getPos = (pos) =>{
        let row = Math.floor((pos-1) / n)
        let col = (pos-1) % n
        col = row % 2 == 1 ? n - 1 - col : col;
        row = n - 1 - row;
        return [row, col]
    }

    let q = [[1,0]]
    while(q.length>0){
        [pos, moves] = q.shift();

        for(let i=1; i<=6; i++){
            let newPos = i + pos;
            let [r, c] = getPos(newPos);
            if(board[r][c] != -1 ) newPos = board[r][c]

            if(newPos == n*n) return moves + 1;

            if(!seen.has(newPos)){
                seen.add(newPos)
                q.push([newPos, moves+1])
            }
        }
    }

    return -1   
};