function solution(n, lost, reserve) {    
    // 체육복을 도난당하고 여벌도 없는 학생(여벌을 받아야하는 학생)
    const noReserveLost = lost.sort((a,b)=>a-b).filter((lost) => !reserve.includes(lost));
    
    // 여벌이 있고 체육복을 도난당하지 않은 학생(빌려줄 수 있는 학생)
    let hasReserve = reserve.sort((a,b)=>a-b).filter((reverse) => !lost.includes(reverse));
    
    const finalLost = noReserveLost.filter((lost) => {
        // 첫번째로 체육복을 빌려줄 수 있는 사람 
        const lend = hasReserve.find((reserve) => Math.abs(reserve - lost) == 1);
        
        // 체육복 빌려줄 사람이 없으면 그대로 lost 리턴
        if(!lend) return lost;
        
        // 빌려준 사람 제외하기
        hasReserve = hasReserve.filter((reverse) => reverse !== lend);
    })
  
    // 답 = 전체 학생 수 - 체육복이 없는 학생 수 
    return n - finalLost.length;
}

console.log(solution(5, [2,4], [2,3,5]))
// lostWithoutExtra: [ 4 ]
// hasGymSuit: 	[ 1, 1, 1, 0, 1 ]

console.log(solution(5, [2,4], [2,4])) 
// lostWithoutExtra: []
// hasGymSuit: 	[ 1, 1, 1, 1, 1 ]

console.log(solution(5, [1,4], [2,3])) 
// lostWithoutExtra: [ 1, 4 ]
// hasGymSuit: 	[ 0, 1, 1, 0, 1 ]

console.log(solution(5, [4,2], [3,5])) 
// lostWithoutExtra: [ 4, 2 ] -> [ 2, 4 ]
// hasGymSuit: 	[ 1, 0, 1, 0, 1 ]