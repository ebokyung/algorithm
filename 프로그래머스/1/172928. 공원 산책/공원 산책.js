function solution(park, routes) {
    const H = park.length
    const W = park[0].length
    
    const obstacle = []
    let curPosition = []
    park.forEach((row, j) => {
        row.split('').forEach((cell, i) => {
            if(cell === 'S') curPosition = [j, i]
            else if (cell === 'X') obstacle.push([j, i])
        })
    })


    const includesArray = (data, arr) => {
      return data.some(e => Array.isArray(e) && e.every((o, i) => Object.is(arr[i] , o)));
    }
    
    routes.forEach((r) => {
        const [op, inputN] = r.split(' ');
        const n = +inputN;
        const [y, x] = curPosition;
        
        let canGo = true;
        switch(op){
            case 'N':
                for(let i=1; i<=n; i++){
                    if(includesArray(obstacle,[y - i, x]) || y - i < 0){
                        canGo = false;
                        break;
                    }
                }
                if(canGo) curPosition = [y - n, x];
                 break;
            case 'E':
                for(let i=1; i<=n; i++){
                    if(includesArray(obstacle,[y, x + i]) || x + i >= W){
                        canGo = false;
                        break;
                    }
                }
                if(canGo) curPosition = [y, x + n];
                 break;
            case 'S':
                for(let i=1; i<=n; i++){
                    if(includesArray(obstacle, [y + i, x]) || y + i >= H){
                        canGo = false;
                        break;
                    }
                }
                if(canGo) curPosition = [y + n, x];
                 break;
            case 'W':
                for(let i=1; i<=n; i++){
                    if(includesArray(obstacle,[y, x - i]) || x - i < 0){
                        canGo = false;
                        break;
                    }
                }
                if(canGo) curPosition = [y, x - n];
                break;
            default:
                break;
        }
    })
    
    return curPosition;
}

