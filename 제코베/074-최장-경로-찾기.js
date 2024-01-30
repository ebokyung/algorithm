/**
 * 이 두 정점으로 가기 위한 최대 거리를 구하고자 합니다.
 * 최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수
 */

const graph = { 1: [2, 3, 4], 2: [1, 3, 4, 5, 6], 3: [1, 2, 7], 4: [1, 2, 5, 6], 5: [2, 4, 6, 7], 6: [2, 4, 5, 7], 7: [3, 5, 6] };

const user_input = prompt("입력해주세요").split(" "); // 1 7
const start = parseInt(user_input[0], 10);
const end = parseInt(user_input[1], 10);

let queue = [start];
let visited = [];

// BFS 이용한 풀이
function sol(n, visited) {
  let node = n[n.length - 1];
  let length = 0;

  if (node == end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length;
  } else {
    visited.push(node);
  }
  let max = [];

  for (let next_node in graph[node]) {
    n.push(graph[node][next_node]);

    max.push(length, sol(n, visited));
    length = Math.max.apply(null, max);

    queue.pop();
  }
  return length;
}

console.log(sol(queue, visited)); // 6
