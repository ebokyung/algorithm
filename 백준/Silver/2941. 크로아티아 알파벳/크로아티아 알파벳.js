const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

solution(input);

function solution(testCase) {
    const croAlp = ['c=','c-','lj','nj','s=','z='];
    const checkAlp = ['c','l','n','s','z'];
    let cnt = 0;
    for(let i=0; i<testCase.length; i++){
        if(checkAlp.includes(testCase[i])){
            if (croAlp.includes(testCase.slice(i,i+2))) { 
                i+=1;
            }
        } else if(testCase[i] == 'd'){
            if (testCase.slice(i, i+2) == 'd-') i+=1;
            if (testCase.slice(i, i+3) == 'dz=') i+=2;
        } 
        cnt ++;
    }
    console.log(cnt);
}
