const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [T, ...testCase] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(i=>+i);

for(let i=0; i<T; i++){
    const n = testCase[i];
    const dp = [1, 2, 4];

    for(let j=3; j<n; j++){
        dp[j] = dp[j-1] + dp[j-2] + dp[j-3];
    }

    console.log(dp[n-1]);
}