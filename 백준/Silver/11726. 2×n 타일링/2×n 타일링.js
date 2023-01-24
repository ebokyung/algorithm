const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

solution(+input);

function solution(n){
  let memo = new Array(n+1);
  memo[1]=1;
  memo[2]=2;

  for(let i=3; i<=n; i++){
    memo[i] = (memo[i-1] + memo[i-2])%10007;
  }

  console.log(memo[n]);
}