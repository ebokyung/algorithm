const N = +require("fs").readFileSync("/dev/stdin").toString()
// 감소하는 수 구하기 (1023개)
const decNums = [];
for(let i=0; i<=9;i++){ // 1자리수
  decNums.push(i);
  getDecNum(i, i)
}
function getDecNum(decNum, cur) {
  for(let i=0; i<cur; i++){
    const newDecNum = decNum * 10 + i;
    decNums.push(newDecNum);
    getDecNum(newDecNum, i);
  }
}
// 정렬 후 N번째 수 출력
decNums.sort((a,b) => a-b)
console.log(decNums[N] ?? -1)