const [n, A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
B.sort((a, b) => a - b);

let answer = [];

const binarySearch = (array, target, start, end) => {
  if (start > end) return 0;
  const mid = Math.floor((start + end) / 2);

  if (array[mid] === target) {
    return 1;
  } else if (array[mid] < target) return binarySearch(array, target, mid + 1, end);
  else if (array[mid] > target) return binarySearch(array, target, start, mid - 1);
};

for (let i = 0; i < n[0]; i++) {
  if (!binarySearch(B, A[i], 0, n[1] - 1)) {
    answer.push(A[i]);
  }
}

if (!answer.length) console.log(0);
else {
  answer.sort((a, b) => a - b);
  console.log(answer.length);
  console.log(answer.join(" "));
}
