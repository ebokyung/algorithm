const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [M,N] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(i=>+i);

let answer = [];

for(let i=M; i<=N; i++){
  let isPrime = true;
  for(let j=2; j*j<=i; j++){
    if(i%j == 0) { isPrime=false; break; }
  }
  if(i == 1) isPrime = false;
  if(isPrime) answer.push(i);
}

console.log(answer.join('\n'))