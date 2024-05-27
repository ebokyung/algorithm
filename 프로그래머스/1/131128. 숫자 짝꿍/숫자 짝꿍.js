// function solution(X, Y) {
//     let xmap = new Map();
//     let ymap = new Map();
    
//     X.split('').forEach(x => {
//         xmap.set(x, xmap.get(x) + 1 || 1)
//     })
//     Y.split('').forEach(y => {
//         ymap.set(y, ymap.get(y) + 1 || 1)
//     })

    
//     let common = []
//     for(let x of xmap.keys()){
//         if(ymap.has(x)) {
//             let cnt = Math.min(xmap.get(x), ymap.get(x))
//             while(cnt--) common.push(x)
//         }
//     }
    
//     if(common.length === 0) return "-1"
    
//     let isZeros = new Set(common)
//     if(isZeros.size === 1 && isZeros.has('0')) return '0';
    
//     common.sort((a,b) => b-a)
    
//     return common.join('');
// }

function solution(X, Y) {
    let result = '';
    const numObj = {};

    for (const char of X) {
        numObj[char] = (numObj[char] || 0) + 1;
    }

    for (const char of Y) {
        if (!numObj[char]) continue; // 여기서 바로 체크하는게 빠르다
        result += char;
        numObj[char]--;
    }

    if (result === '') return '-1';
    if (+result === 0) return '0';
    return [...result]
        .map((num) => +num)
        .sort((a, b) => b - a)
        .join('');    
}


// want
// X, Y에서 짝으로 숫자가 존재하는 경우, 해당 문자열을 통해 만들 수 있는 최대값을 반환하라

// solving
// 1. X를 순회하며 각 숫자의 개수 세어 객체 or 배열에 저장 
// 2. Y를 순회하며 각 문자가 1번에서 저장한 객체에 저장한 값이 1이상인 경우, 그 값을 -1하고 result에 추가
// 3. 2번에서 만들어진 문자열이 빈 문자열이라면 -1 반환
// 5. 2번에서 만들어진 문자열을 숫자로 변환했을 때 0이라면 0 반환
// 6. 해당 문자열을 내림차순 정렬한 문자열 반환