function solution(k, d) {
    let total_count = 0;

    // x 좌표 0에서 d까지 k 단위로 증가시키면서 반복
    for(let x = 0; x <= d; x += k) {
        // x에 대해 원 안에 포함되는 최대 y 좌표를 계산
        const max_y = parseInt(Math.sqrt(d ** 2 - x ** 2));
        // 0부터 max_y 사이에 k 단위로 몇 개의 y 좌표가 있는지 + 0 포함
        total_count += parseInt(max_y / k) + 1;
    }

    return total_count;
}