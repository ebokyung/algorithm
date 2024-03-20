const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const board = input.map(row => row.split('').map(Number));

const checkTheNumInRow  =(num, row) =>{
  for(let i=0; i<9; i++){
    if(board[row][i] === num) return true;
  }
  return false;
}
const checkTheNumInCol  =(num, col) =>{
  for(let i=0; i<9; i++){
    if(board[i][col] === num) return true;
  }
  return false;
}
const checkTheNumInBox  =(num, row, col) =>{
  const boxX = Math.floor(col/3) * 3;
  const boxY = Math.floor(row/3) * 3;
  for(let x=boxX; x<boxX+3; x++){
    for(let y=boxY; y<boxY+3; y++){
      if(board[y][x] === num) return true;
    }
  }
  return false;
}

function bt (y, x, num) {
  if(checkTheNumInRow(num, y)) return false;
  else if(checkTheNumInCol(num, x)) return false;
  else if(checkTheNumInBox(num, y, x)) return false;
  
  board[y][x] = num;

  const [nextY, nextX] = findNextEmpty();
  if (nextY == 9 && nextX == 9) return true;

  for(let i=1; i<=9; i++){
    if(bt(nextY, nextX, i)) return true;
  }

  board[y][x] = 0;
  return false;
}

const findNextEmpty =() =>{
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x] === 0) return [y,x]
    }
  }
  return [9,9];
}

const solution = () =>{
  const [firstEmptyY, firstEmptyX] = findNextEmpty();
  if(firstEmptyY === 9 && firstEmptyX === 9) return;

  for(let i=1; i<=9; i++){
    bt(firstEmptyY, firstEmptyX, i)
  }
}
solution();

console.log(board.map(row=>row.join('')).join('\n'))