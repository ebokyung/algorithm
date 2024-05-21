// function solution(ingredient) {
//     var answer = 0;
//     let stack = [];
    
//     ingredient.forEach((ing) => {
//         stack.push(ing)
        
//         if(stack.length >= 4) {
//             if(stack.slice(-4).join('') === '1231'){
//                 stack.pop()
//                 stack.pop()
//                 stack.pop()
//                 stack.pop()
//                 answer++
//             }
//         }
//     })
    
//     return answer;
// }


2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
function solution(ingredient) {
    let hamburger = 0
    // 재료 별 반복
    for(let i = 0 ; i < ingredient.length ; i ++) {
        // 배열의 4 요소가 빵 야채 고기 빵 인 경우
        if(ingredient.slice(i,i+4).join("") === '1231') {
            hamburger++
            // 햄버거 재료 배열에서 제외
            ingredient.splice(i,4)
            // 인덱스에서 3를 빼야 반복문 끝부분에서 +1 되고 다시 원 자리에서 재검사 가능
            i-=3
        }
    }
    return hamburger
}