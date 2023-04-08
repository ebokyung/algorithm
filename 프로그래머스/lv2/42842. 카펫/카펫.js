function solution(brown, yellow) {
    const total = brown + yellow;
    
    for(let i=3; i*i<=total; i++){
        if(total%i === 0) { // 약수이고
            let col = total/i;
            let row = i;
            if((col - 2) * (row - 2) === yellow) { // yellow 모양이 맞으면
                return [col, row];
            }
        }
    }
}