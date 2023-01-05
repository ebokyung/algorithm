const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = {
    T: +input[0],
    arr: input.slice(1),
}
solution(testCase);

function solution(testCase) {
    let cnt = testCase.T;
    for(let i=0; i<testCase.T; i++){
        let word = testCase.arr[i];
        let alp = new Array(word[0]);
        for(let j=1; j<word.length; j++){
            if(word[j-1] == word[j]) continue;
            else if(!alp.includes(word[j])){
                alp.push(word[j]);
            } else{
                cnt--;
                break;
            }
        }
    }
    console.log(cnt);
}