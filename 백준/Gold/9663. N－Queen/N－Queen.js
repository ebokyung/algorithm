const n = +require("fs").readFileSync("/dev/stdin").toString();

let results = 0;
const colSet = new Set();  // column duplicates
const diagSet1 = new Set(); // row-col duplicates
const diagSet2 = new Set(); // row+col duplicates

function backtrack(row) {
  // 종료 조건
  if (row === n) {
    results += 1;
    return;
  }
  
  for (let col = 0; col < n; col++) {
    const diag1Info = row - col;
    const diag2Info = row + col;
    
    if (colSet.has(col) || diagSet1.has(diag1Info) || diagSet2.has(diag2Info)) {
      continue;
    }
    
    // 중복 체크
    colSet.add(col);
    diagSet1.add(diag1Info);
    diagSet2.add(diag2Info);
    
    // 재귀 호출
    backtrack(row + 1);
    
    // 중복 체크 제거
    diagSet2.delete(diag2Info);
    diagSet1.delete(diag1Info);
    colSet.delete(col);
  }
}

backtrack(0);
console.log(results);