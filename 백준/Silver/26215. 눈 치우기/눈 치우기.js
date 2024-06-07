let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = +input[0];
let snows = input[1].split(' ').map(i=>+i)

if(n === 1){
  if(snows[0] > 1440) {
    console.log(-1)
    return;
  }
  console.log(snows[0])
  return;
}

let answer = 0;
while(true){
  snows.sort((a,b)=>b-a)

  if(snows[0] === 0) {
    if(answer > 1440) answer = -1;
    break;
  }

  snows[0]--;
  if(snows[1] > 0) snows[1]--;
  answer++;
}

console.log(answer);