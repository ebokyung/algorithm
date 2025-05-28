/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected[0].length
    const visited = new Array(n).fill(false)
    let group = 0

    const dfs = (city) => {
        if(visited[city]) return

        visited[city] = true

        for (let j = 0; j < n; j++) {
            if (isConnected[city][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }

    for(let i =0; i < n; i++){
        if(!visited[i]) {
            dfs(i)
            group++ 
        }
        
    }

    return group
};