const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

solution(+input);

function solution(n){
  let memo = new Array(n+1);
  memo[0]=0;
  memo[1]=1;
  for(let i=2; i<=n; i++){
    memo[i] = 5; //최대 4개의 자연수로 나타내므로 
  }

  for(let i=2; i<=n; i++){
    for(let j=1; j*j<=i; j++){
      memo[i] = Math.min( memo[i] , 1 + memo[i-j*j]);
    }
  }

  console.log(memo[n]);
}