function solution(X, Y) {
    let xmap = new Map();
    let ymap = new Map();
    
    X.split('').forEach(x => {
        xmap.set(x, xmap.get(x) + 1 || 1)
    })
    Y.split('').forEach(y => {
        ymap.set(y, ymap.get(y) + 1 || 1)
    })

    
    let common = []
    for(let x of xmap.keys()){
        if(ymap.has(x)) {
            let cnt = Math.min(xmap.get(x), ymap.get(x))
            while(cnt--) common.push(x)
        }
    }
    
    if(common.length === 0) return "-1"
    
    let isZeros = new Set(common)
    if(isZeros.size === 1 && isZeros.has('0')) return '0';
    
    common.sort((a,b) => b-a)
    
    return common.join('');
}