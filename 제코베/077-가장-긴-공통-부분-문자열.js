// LCS(Longest Common Subsequence, 최장 공통 부분 수열)
function sol(string) {
  let result = [];
  for (let i = 1; i < string.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      result.push(string.slice(j, j + string.length - i + 1));
    }
  }
  return result;
}

const inputOne = prompt("첫번째 문자열을 입력해주세요.");
const inputTwo = prompt("두번째 문자열을 입력해주세요.");
const arrayOne = sol(inputOne);
const arrayTwo = sol(inputTwo);

//공통 부분 문자열 찾기- 교집합
let intersection = arrayOne.filter((x) => arrayTwo.includes(x));

//문자열 길이로 내림차순 정렬
intersection.sort((a, b) => {
  return b.length - a.length;
});

console.log(intersection[0].length);
