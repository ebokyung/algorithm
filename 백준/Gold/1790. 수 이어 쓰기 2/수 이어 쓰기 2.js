const [N, k] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

console.log(solution(N, k)); 

function solution(N, k) {
  let digit = 1;
  let nine = 9;
  let acc = 0;

  while (k > digit * nine) {
    const accPerDigit = digit * nine;
    k -= accPerDigit;
    acc += nine;
    digit++;
    nine *= 10;
  }

  const nthNum = Math.ceil(k / digit);
  const index = (k - 1) % digit;

  const answer = acc + nthNum;
  if (answer > N) return -1;
  return answer.toString().charAt(index);
}