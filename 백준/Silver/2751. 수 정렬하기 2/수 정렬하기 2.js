const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const iter = input.shift();

input.sort((a,b) => a - b);

console.log(input.join("\n"));