let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [r, c, n] = input[0].split(" ").map(Number);
const map = input.slice(1).map(i => i.split(''))

// 상하좌우 탐색을 위한 방향
const dir = [[-1, 0],[1, 0],[0, -1],[0, 1]];

// 맵 출력 함수
function printMap(arr) {
  console.log(arr.map(v => v.join("")).join("\n"));
}

// 폭탄 함수
function bomb(arr) {
  const map = Array.from({ length: r }, () => Array(c).fill("O"));
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (arr[i][j] === "O") {
        map[i][j] = ".";
        for (let [dy, dx] of dir) {
          let nr = i + dy;
          let nc = j + dx;
          if (nr >= 0 && nr < r && nc >= 0 && nc < c) {
            map[nr][nc] = ".";
          }
        }
      }
    }
  }
  return map;
}

if (n === 1) { 
  printMap(map); // 초기 상태를 출력
} else if (n % 2 === 0) { 
  // 모든 칸에 폭탄이 설치된 상태를 출력
  printMap(Array.from({ length: r }, () => Array(c).fill("O"))); 
} else if (n % 4 === 1) {
  printMap(bomb(bomb(map))); // 두 번째 폭발 상태를 출력
} else if (n % 4 === 3) {
  printMap(bomb(map)); // 첫 번째 폭발 상태를 출력
}

/**
 * 1. 초기 상태
 * t = 0: 초기 상태
 * 2. 첫 번째 폭발 
 * t = 3: 초기 상태에서 3초 후 폭발한 상태
 * 3. 두 번째 폭발 
 * t = 5: 초기 상태에서 5초 후 폭발한 상태 (첫 번째 폭발 이후 2초 후 설치된 폭탄들이 폭발)
 * 
 * 이 패턴이 4초 주기로 반복되기 때문에 다음과 같은 규칙을 발견할 수 있습니다:
 * 
 * t % 4 == 1: 두 번째 폭발 상태 (5초 후, 9초 후, ...)
 * t % 4 == 3: 첫 번째 폭발 상태 (3초 후, 7초 후, ...)
 */