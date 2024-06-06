let inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = +inputs[0];
const S = inputs[1];

// 방향 벡터 설정: 북(0), 동(1), 남(2), 서(3)
const Dy = [-1, 0, 1, 0];
const Dx = [0, 1, 0, -1];

// 101x101 배열을 '#'로 초기화
let map = Array.from({ length: 101 }, () => Array(101).fill('#'));

let y = 50, x = 50, D = 2;
let ey = 50, ex = 50, sy = 50, sx = 50;

map[y][x] = '.';

for (let ch of S) {
    if (ch === 'L') {
        D = (D + 3) % 4;
    } else if (ch === 'R') {
        D = (D + 1) % 4;
    } else {
        y += Dy[D];
        x += Dx[D];
        map[y][x] = '.';
        sy = Math.min(sy, y);
        ey = Math.max(ey, y);
        sx = Math.min(sx, x);
        ex = Math.max(ex, x);
    }
}

let answer = '';
for (let i = sy; i <= ey; i++) {
    answer += map[i].slice(sx, ex + 1).join('') + '\n';
}
console.log(answer)