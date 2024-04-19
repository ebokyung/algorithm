function solution(m, n, startX, startY, balls) {
    let answer = [];
    for (let i = 0; i < balls.length; i++) {
        let [a, b] = balls[i];
        let k = 10000000;
        if (startX !== a || b > startY) {
            k = Math.min(k, Math.pow(startX - a, 2) + Math.pow(startY + b, 2));
        }
        if (startY !== b || a > startX) {
            k = Math.min(k, Math.pow(startX + a, 2) + Math.pow(startY - b, 2));
        }
        if (startX !== a || b < startY) {
            k = Math.min(k, Math.pow(startX - a, 2) + Math.pow(2 * n - b - startY, 2));
        }
        if (startY !== b || a < startX) {
            k = Math.min(k, Math.pow(2 * m - a - startX, 2) + Math.pow(startY - b, 2));
        }
        answer.push(k);
    }
    return answer;
}
