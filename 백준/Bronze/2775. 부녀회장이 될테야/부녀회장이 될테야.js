const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

for(let i=0; i<T; i++){
  dp(...arr.slice(i*2, i*2+2));
}

function dp(k,n){
  let memo = [];

  for(let a=0; a<=k*1; a++){
    memo.push([1]);
    for(let b=1; b<n*1; b++){
      a==0 ? memo[a].push(b+1) : memo[a].push(memo[a - 1][b] + memo[a][b-1]);
    }
  }

  console.log(memo[k][n-1]);
}