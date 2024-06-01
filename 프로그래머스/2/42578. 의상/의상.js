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

/** +1은 그 옷을 안입는 경우, 마지막 -1은 모든 옷을 안입는 경우 제외를 위한 것
** 만약 모자 2종류, 상의 2종류면 
** (모자1, 모자2, 모자 안쓰기)*(상의1, 상의2, 상의 안입기)=9인데 
** (모자 안쓰기, 상의 안입기) 1개 빼면 9-1=8
*/

// 짧은 풀이
// function solution(clothes) {
//     return Object.values(clothes.reduce((obj, t)=> {
//         obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
//         return obj;
//     } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
// }