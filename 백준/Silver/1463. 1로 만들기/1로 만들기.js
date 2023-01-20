const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const N = parseInt(input);

let memo = new Array(N+1).fill(-1);
memo[0]=memo[1]=0;
memo[2]=memo[3]=1;

function dp(n){
    if(memo[n] !== -1) return memo[n];
    else {
        let a = n%3 == 0 ? dp(n/3) : 1000000;
        let b = n%2 == 0 ? dp(n/2) : 1000000;
        
        return memo[n] = Math.min(a, b, dp(n-1)) + 1;
    }
}

dp(N);
console.log( memo[N] );