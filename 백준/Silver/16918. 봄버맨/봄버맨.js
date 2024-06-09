let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [R,C,N] = input[0].split(' ').map(i => +i)
const bombs = input.slice(1).map(i => {
  let temp = i.split('')
  return temp.map(bomb => bomb === 'O' ? 3 : 0)
})

const directions = [[0,-1], [0,1], [1,0], [-1,0]]

let time = 1;
while(time <= N){
  if(time % 2 === 0){ // 짝수 시간에 폭탄 채우기
    for(let i=0; i<R; i++){
      for(let j=0; j<C; j++){
        if(bombs[i][j] === 0) bombs[i][j] = 3;
        else bombs[i][j] -= 1;
      }
    }
  } else { // 홀수 시간에 폭발
    for(let i=0; i<R; i++){
      for(let j=0; j<C; j++){
        if(bombs[i][j] === 1) {
          bombs[i][j] = 0;
          for(let [dy,dx] of directions){
            const ny = i + dy;
            const nx = j + dx;
            if(ny >= R || nx >= C || ny < 0 || nx <0) continue;
            if(bombs[ny][nx] > 1) bombs[ny][nx] = 0
          }
        } else if (bombs[i][j] > 1) bombs[i][j] -= 1;
      }
    }
  }
  time++;
}

let answer = ''
for(let i=0; i<R; i++){
  answer += bombs[i].map(bomb => bomb === 0 ? '.' : 'O').join('') + '\n'
}
console.log(answer)