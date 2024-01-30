/**
 * 두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요.
 * 이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미
 */

const graph = { A: ["B", "C"], B: ["A", "D", "E"], C: ["A", "F"], D: ["B"], E: ["B", "F"], F: ["C", "E"] };

const user_input = prompt("입력해주세요").split(" "); // A F
const start = user_input[0];
const end = user_input[1];

let queue = [start];
let visited = [start];

// BFS 이용한 풀이
function solution() {
  let count = -1;

  while (queue.length !== 0) {
    count += 1;

    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.splice(0, 1);
      if (node == end) {
        return count;
      }

      for (let next_node in graph[node]) {
        if (!visited.includes(graph[node][next_node])) {
          visited.push(graph[node][next_node]);
          queue.push(graph[node][next_node]);
        }
      }
    }
  }
}
console.log(solution()); // 2
