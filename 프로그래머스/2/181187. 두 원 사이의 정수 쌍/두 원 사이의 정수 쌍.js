const solution = (r1, r2) => {
    let answer = 0;
    for(let i=1; i<=r2; i++){
        const y2 = Math.sqrt(r2**2 - i**2)
        const y1 = Math.sqrt(r1**2 - i**2) || 0
        answer += Math.floor(y2) - Math.ceil(y1) + 1
    }
    answer *= 4;
    return answer;
};

// 1. 4개의 사분면 중 1개만 구한 뒤 4를 곱한다.
// 2. x좌표가 정수인 경우 가능한 y좌표의 범위를 구한다.
//    중심이 (a, b)인 원의 방정식 : (x-a)² + (y-b)² = r² 
// 3. 범위에 포함되는 정수 계산
// https://aram-su.tistory.com/21

