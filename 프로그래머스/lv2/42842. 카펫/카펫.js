function solution(brown, yellow) {
    let divisor = []
    
    const total = brown + yellow;
    for(let i=3; i*i<=total; i++){
        if(total%i === 0) divisor.push([total/i, i])
    }
    
    for(let i=1; i<=divisor.length; i++){
        let col = divisor[divisor.length-i][0]
        let row = divisor[divisor.length-i][1]
        if((col - 2) * (row - 2) === yellow) {
            return divisor[divisor.length-i];
        }
    }
}