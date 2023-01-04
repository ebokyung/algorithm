const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

solution(input);

function solution(testCase) {
    //1. 몇번재 라인인지
    let N = +testCase;
    let lineCounter = 0;    
    while(N > 0) {
        lineCounter++;
        N -= lineCounter;
    }   
    //2. 몇 번째 데이터인지
    const data = lineCounter + N; 

    //3. 분모, 분자 구하기
    const asc = [] //오름차순
    const desc = [] //내림차순
    for(let i=0; i<lineCounter; i++){
        asc[i] = i+1;
        desc[i] = lineCounter-i;
    }
    if(lineCounter % 2 === 0) { //짝수번째 줄이면 분모 감소, 분자 증가
        console.log(`${asc[data-1]}/${desc[data-1]}`)
    } else {
        console.log(`${desc[data-1]}/${asc[data-1]}`)
    }
    
}