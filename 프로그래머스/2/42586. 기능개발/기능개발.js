// 풀이2.
function solution(progresses, speeds) {
    const answer = [0];
    const dDays = progresses.map((val, index) => Math.ceil((100 - val) / speeds[index]))
    
    let cur = dDays[0];
    for(let i=0, j=0; i<dDays.length; i++){
        if(dDays[i] <= cur){
            answer[j] += 1; // answer[answer.length-1] += 1
        } else {
            cur = dDays[i]
            answer[++j] = 1; // answer[answer.length] = 1
        }
    }
    
    return answer
}

// 1. 남은 일수를 구하는 것이 핵심
// 2. 기준날로부터 남은 일수가 적은 날만큼 누적
// for문에 여러 변수 선언할 수 있음



// 풀이 1.
// function solution(progresses, speeds) {
//     const answer = [];
//      // 1.
//     const queue = progresses.map((val, index) => Math.ceil((100 - val) / speeds[index]))
//      // 2.
//     while(queue.length){
//         const doneTask = queue.map((val) => val - queue[0]);
//         let count = 0;
//         for(let j in doneTask){
//             if(doneTask[j] <= 0) { queue.shift(); count++; }
//             else break;
//         }
//         answer.push(count);
//     }
//     return answer
// }

// // 1.
// // Math.ceil((100 - progresses) / speeds)
// // [7, 3, 9]
// // [0, -4, 2]

// // 2.
// // [5, 10, 1, 1, 20, 1]
// // [0, 5, -4, -4, 15, -4]
// // [   0, -9, -9, 10, -9]
// // [       0,  0, 19, 0]
// // [              0, -19]
