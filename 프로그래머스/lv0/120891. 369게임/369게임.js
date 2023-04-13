function solution(order) {
        const mySet = new Set([3, 6, 9]);
    return String(order) 
        .split("")
        .filter((num) => mySet.has(parseInt(num))).length;
}