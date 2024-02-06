function solution(name) {
    let minUpDownMove = 0;
    let minLeftRightMove = name.length - 1;
    for (let i = 0; i < name.length; i++) {
        minUpDownMove += getUpDownMoveCount(name[i]);
        minLeftRightMove = getLeftRightMoveCount(name, i, minLeftRightMove);
    }
    return minUpDownMove + minLeftRightMove
}

// 조이스틱의 상, 하 이동시 현재 알파벳이 A 와 가까운지, Z 와 가까운지 판단
function getUpDownMoveCount(letter) {
    // ASCII CODE 65(A) ~ 90(Z)
    // A->Z로 가는 횟수 1회 고려
    const asciiCode = letter.charCodeAt();
    return Math.min(asciiCode - 65, 90 + 1 - asciiCode);
}

// 조이스틱의 좌, 우 이동시 
function getLeftRightMoveCount(name, index, minLeftRightMove){
    let nextIndex = index + 1;
    
    // 다음 알파벳부터 연속되는 A 개수 세기
    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex += 1;
    }
    
    const goRight = index * 2 + name.length - nextIndex; // 먼저 오른쪽으로 가기
    const goLeft = index + (name.length - nextIndex) * 2; // 처음부터 반대로 가기
    
    return Math.min(minLeftRightMove, goRight, goLeft);
}