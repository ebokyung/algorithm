const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N,...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = [];

for(let i=0; i<N; i++){
    let stack = [];
    let testCase = input[i].split('');
    let VPS = 1;

    testCase.map(i=>{
       if(i=='(') stack.push('(')
       else{
            if(stack.length > 0) stack.pop();
            else { 
                VPS = 0; 
            }
       }
    })
    answer.push(stack.length ==0 && VPS ? 'YES' : 'NO')
}

console.log(answer.join('\n'));