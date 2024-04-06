// 1. O(n^2)
// numbers의 최대 길이가 10^6이므로 그냥 완전 탐색은 시간 초과
// function solution(numbers) {
//     var answer = [];
//     for(let i=0; i<numbers.length; i++){
//         let temp = -1;
//         for(let j=i+1; j<numbers.length; j++){
//             if(numbers[i] < numbers[j]) { 
//                 temp = numbers[j];
//                 break;
//             }
//         }
//         answer.push(temp)
//     }
//     return answer;
// }

// 2. O(n)
// 뒤에서 순회, stack 
// function solution(numbers) {
// }

// 3. 다이나믹?
function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);

  for (let i = numbers.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        answer[i] = numbers[j];
        break;
      } else if (numbers[i] >= numbers[j]) {
        if (answer[j] === -1) {
          answer[i] = -1;
          break;
        } else if (numbers[i] < answer[j]) {
          answer[i] = answer[j];
          break;
        }
      }
    }
  }
  return answer;
}

