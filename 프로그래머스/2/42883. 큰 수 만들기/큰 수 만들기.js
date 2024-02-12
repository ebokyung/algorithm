function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const item of number) { // "1231234"
    // 스택의 마지막 요소가 item보다 작다면 스택의 마지막 요소를 지움
    // 즉, 앞에서 부터 큰 숫자들만 담아감 (현재 최적인 값을 고르는 greedy!)
    while (count < k && stack.at(-1) < item) {
      stack.pop();
      count += 1;
    }
    stack.push(item); 
    // item k stack  
    // 1    0 [ 1 ]
    // 2    1 [ 2 ]
    // 3    2 [ 3 ]
    // 1    2 [ 3, 1 ]
    // 2    3 [ 3, 2 ]
    // 3    3 [ 3, 2, 3 ]
    // 4    3 [ 3, 2, 3, 4 ]
  }

  // count가 k까지 도달하지 못하는 경우를 고려해 n-k만큼 자르기
  // 예)"9876543"
    // item k stack  
    // 9    0 [ 9 ]
    // 8    0 [ 9, 8 ]
    // 7    0 [ 9, 8, 7 ]
    // 6    0 [ 9, 8, 7, 6 ]
    // 5    0 [ 9, 8, 7, 6, 5 ]
    // 4    0 [ 9, 8, 7, 6, 5, 4 ]
    // 3    0 [ 9, 8, 7, 6, 5, 4, 3 ]
  return stack.slice(0, number.length - k).join("");
}