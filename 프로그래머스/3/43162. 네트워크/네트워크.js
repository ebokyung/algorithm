function solution(n, computers) {
    const visited = Array.from({length: n}, () => 0)
    let networkCount = 0;
    
    for(let i = 0; i < n; i++){
        if(visited[i] === 1) continue;
        networkCount++;
        dfs(i); 
    }
    
    function dfs(i) { // find same network computers and check
        for(let j = 0; j < n; j++){
            if(visited[j] === 0 && computers[i][j] === 1){
                visited[j] = 1;
                dfs(j)
            }
        }

    }
    
    return networkCount;
}

