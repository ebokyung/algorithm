function solution(clothes) {
    var answer = 1;
    
    // 1. hash map 
    const hash = new Map();
    clothes.forEach(cloth => {
        const [name, kind] = cloth;
        hash.set(kind, hash.get(kind) + 1 || 1)
    })
    
    // 2. combi
    // 점화식 (종류a 갯수 + 1)(종류b 갯수 + 1)... - 1
    hash.forEach((value, _key, _map) => {
        answer *= (value + 1)
    })
    
    return answer - 1;
}