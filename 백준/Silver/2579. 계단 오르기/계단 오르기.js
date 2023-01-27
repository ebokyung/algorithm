const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(i=>+i);
arr = [0, ...arr];

let memo = new Array(n+1);
memo[1] = arr[1];
memo[2] = Math.max(arr[2], arr[1]+arr[2]);
memo[3] = Math.max(arr[1]+arr[3], arr[2]+arr[3]);
memo[4] = Math.max(arr[1]+arr[3]+arr[4], arr[1]+arr[2]+arr[4], arr[2]+arr[4]);

for(let i=5; i<=n; i++){
  memo[i] = Math.max(memo[i-3]+arr[i-1]+arr[i], memo[i-2]+arr[i]);
}

console.log(memo[n]);