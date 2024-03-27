const solution = (sequence, k) => {
  let answer = [];
  let maxSum = 0;
  let end = 0;

  const n = sequence.length;
  for (let i = 0; i < n; i++) {
    while (maxSum < k && end < n) {
      maxSum += sequence[end];
      end++;
    }

    if (maxSum === k) {
      answer.push([i, end - 1, end - 1 - i]);
    }

    maxSum -= sequence[i];
  }

  answer.sort((a, b) => a[2] - b[2]);
  return answer[0] ? answer[0].slice(0, 2) : [];
};