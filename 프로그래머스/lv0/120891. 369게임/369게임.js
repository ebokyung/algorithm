function solution(order) {
    // 풀이 1.
    //     const mySet = new Set([3, 6, 9]);
    // return String(order) 
    //     .split("")
    //     .filter((num) => mySet.has(parseInt(num))).length;
    
    // 풀이 2.
    return (order
        .toString()
        .match(/(3|6|9)/g) ?? []).length
}