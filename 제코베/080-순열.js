function combination(chars) {
  let combi = [];

  const f = (prefix, chars) => {
    for (let i = 0; i < chars.length; i++) {
      combi.push(prefix + chars[i]);

      f(prefix + chars[i], chars.slice(i + 1));
    }
  };

  f("", chars);
  //pre     chars                combi
  //''      ["A","B","C","D"]    ["A"]
  //'A'     ["B","C","D"]        ["AB"]
  //'AB'    ["C","D"]            ["ABC"]
  // ...

  //조합의 수에 맞는 것만 추출!
  const result = combi.filter((x) => x.length === n);
  console.log(result);

  return result.length;
}

const arr = prompt("입력해주세요").split(","); // A,B,C,D
const n = parseInt(prompt("조합의 수를 입력해주세요"), 10);

console.log(combination(arr));
