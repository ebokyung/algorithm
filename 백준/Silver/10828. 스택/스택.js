const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let stack = [];
let answer = [];

function push(n) {
    stack.push(n);
}
function pop(){
    stack.length < 1 ? answer.push(-1) : answer.push(stack.pop());
}
function size(){
    answer.push(stack.length);
}
function empty() {
    stack.length == 0 ? answer.push(1) : answer.push(0);
}
function top() {
    stack.length == 0 ? answer.push(-1) : answer.push(stack[stack.length-1]);
}


solution(+input[0], input.slice(1));

function solution(N, testCase){
    for(let i=0; i<N; i++){
        if(testCase[i].includes('push')){
            let [x,n] = testCase[i].split(' ')
            push(n);
        } else if(testCase[i] == 'pop') pop();
        else if(testCase[i] == 'size') size();
        else if(testCase[i] == 'empty') empty();
        else if(testCase[i] == 'top') top()
    }

    console.log(answer.join('\n'))
}