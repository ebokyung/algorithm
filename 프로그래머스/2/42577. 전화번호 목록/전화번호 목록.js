

// 풀이 1.
// // index 접근이 아니라 key로 바로 접근하는 것이 효율성 문제의 핵심!
// function solution(phone_book) {
//     var answer = true;
    
//     const map = new Map();
//     phone_book.forEach(phone_number => {
//         map.set(phone_number, true)
//     })
    
//     for(let i=0; i<phone_book.length; i++){
//         let cur_number = phone_book[i];
//         let temp = ''
//         for(let j=0; j<cur_number.length; j++){
//             temp += cur_number[j]
//             if(map.get(temp) && temp !== cur_number){
//                 answer = false;
//                 break;
//             }
//         }
//         if(!answer) break;
//     }
    
//     return answer;
// }

// 풀이 2.
// 정렬***해서 매칭
function solution(phone_book) {
    // sort - 기본 정렬 순서는 문자열의 유니코드 코드 
    // Array.prototype.some() - 적어도 하나라도 통과하는지
    // String.prototype.startsWith(searchString[, position])
    return !phone_book.sort().some((_num,i)=> {
        if(i === phone_book.length -1) return false;
        return phone_book[i+1].startsWith(phone_book[i]);        
    })
}