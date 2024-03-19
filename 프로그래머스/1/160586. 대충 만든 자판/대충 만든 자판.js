function solution(keymap, targets) {
    const answer = [];
    for(let target of targets){
        let sum = 0;
        for(let letter of target){
            let min = Number.MAX_SAFE_INTEGER;
            keymap.forEach(k =>{
                const idx = k.indexOf(letter);
                if(idx > -1) min = Math.min(min, idx+1);
            })
            sum += min;
        }
        answer.push(sum);
    }
    
    return answer.map(i => {
        if(i >= Number.MAX_SAFE_INTEGER) 
            return -1
        return i;
    })
}