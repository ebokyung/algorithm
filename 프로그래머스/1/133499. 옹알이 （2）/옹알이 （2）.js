// function solution(babbling) {
//     var answer = 0;
//     let pronunciation = ['aya','ye','woo','ma']
    
//     for(let i=0; i<babbling.length; i++) {
//         let bab = babbling[i];
//         for(let j=0; j<pronunciation.length; j++) {
//             let pro = pronunciation[j];
//             if(bab.includes(pro.repeat(2))) break;
//             bab = bab.split(pro).join(' ')
//             if(bab === ' ') continue;
//         }
//         if(bab.split(" ").join("").length === 0) answer++
//     }
    
//     return answer;
// }

function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/; // 하나의 문자열이 연속해서 반복되는 경우
    // \1+ : 앞서 캡처한 그룹이 한 번 이상 반복되는지
  const regexp2 = /^(aya|ye|woo|ma)+$/; // 문자열 전체가 "aya", "ye", "woo", "ma" 중 하나 이상의 문자열로만 이루어진 경우
    // ^와 $는 각각 문자열의 시작과 끝을 의미

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}
