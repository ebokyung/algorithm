function solution(k, tangerine) {
    const kindOfSize = new Set(tangerine);
    let countMap = new Map();
    Array.from(kindOfSize).map(i => countMap.set(i, 0));
    
    for(const i of tangerine){
        if(kindOfSize.has(i)) countMap.set(i, countMap.get(i)+1);
    }
    
    const values = Array.from(countMap.values()).sort((a,b) => b-a);
    
    let count = 0;
    for (let i=0; i<values.length; i++) {
        count += values[i]
        if (count >= k) {
            return i ? i + 1 : 1     
        }
    }   
    
}