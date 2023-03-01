const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(i=>+i);
let answer = [];

const maxNum = Math.max(...input);
let isPrime = new Array(2*maxNum+2).fill(true);
for(let i=2; i*i<=2*maxNum; i++){
  let mul = 2;
  while(i*mul <= 2*maxNum){
    isPrime[i*mul] = false;
    mul++;
  }
}

for(let i=0; i<input.length-1; i++){
  answer.push( howManyArePrimes(input[i]) );
}

function howManyArePrimes(n){
  let cnt = 0;
  for(let i=n+1; i<=2*n; i++){
    if(isPrime[i] == true) cnt++;
  }
  return cnt;
}

console.log(answer.join('\n'));