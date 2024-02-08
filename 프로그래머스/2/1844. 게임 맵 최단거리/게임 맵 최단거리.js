function solution(maps) {
    const n = maps.length; // row
    const m = maps[0].length; // col
    const queue = [{coord:[0,0], count:0}];

    while(queue.length){
        const {coord: [curRow, curCol], count} = queue.shift();
        if(curRow === -1 || curRow >= n || curCol === -1 || curCol >= m) continue;
        if(curRow == n-1 && curCol == m-1) return count + 1;
        if(maps[curRow][curCol] === 0) continue;
        maps[curRow][curCol] = 0;

        const direction = [[curRow-1, curCol], [curRow+1, curCol],[curRow, curCol-1],[curRow, curCol+1]];
        for(let i of direction){
            queue.push({coord: i, count: count+1});
        }
    }
    return -1;
}

