const input = +require("fs").readFileSync("/dev/stdin").toString();
const route = [];
let answer = "";

function hanoi(n, from, to, temp) {
  if (n === 1) {
    // 원반이 한 개일 때에는 바로 옮기기
    route.push([from, to]);
    return 1;
  }

  hanoi(n - 1, from, temp, to); // n-1개를 보조기둥으로 옮기고

  route.push([from, to]); // 가장 큰 원반을 목표기둥으로 이동

  hanoi(n - 1, temp, to, from); // 보조기둥과 시작기둥을 바꿈 (보조기둥에 있는 것들을 목표기둥으로 옮겨야 하니까)
}

hanoi(input, "1", "3", "2");

route.forEach((r) => (answer += r.join(" ") + "\n"));
console.log(route.length);
console.log(answer);
