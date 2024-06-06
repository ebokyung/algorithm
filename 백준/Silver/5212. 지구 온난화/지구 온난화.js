let inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [R,C] = inputs[0].split(' ');
const map = inputs.slice(1).map(r => r.split(''));

const Dy = [-1, 0, 1, 0];
const Dx = [0, 1, 0, -1];

let sy = R-1, sx = C-1, ey = 0, ex = 0;

for(let i=0; i<R; i++){
  for(let j=0; j<C; j++){
    if(map[i][j] === 'X'){
      let cnt = 0;
      for(let k=0; k<4; k++){
        const ny = i+Dy[k];
        const nx = j+Dx[k];
        if(ny<0 || nx<0 || ny>=R || nx>=C || map[ny][nx] === '.') cnt++;
      }
      if(cnt >= 3) map[i][j] = 0;
      else{
        sy = Math.min(sy, i)
        sx = Math.min(sx, j)
        ey = Math.max(ey, i)
        ex = Math.max(ex, j)
      }
    }
  }
}

let answer = '';
for(let i=sy; i<=ey; i++){
  answer += map[i].map(i=>i === 0 ? '.' : i).join('').slice(sx, ex + 1) + '\n';
}
console.log(answer)