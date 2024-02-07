// 1. 재귀함수 (ft. 피보나치수열)
function fn(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fn(n - 1) + fn(n - 2);
  }
}
console.log(fn(6)); //8

// 2. memoization (DP 중 하나의 기법)
var N = 6;
var memory = Array(N + 1).fill(0);

function fm(n) {
  if (n === 1 || n === 2) {
    memory[n] = 1;
    return 1;
  } else if (memory[n] !== 0) {
    return memory[n];
  } else {
    memory[n] = fn(n - 1) + fn(n - 2);
    return memory[n];
  }
}

console.log(fm(6)); //8
