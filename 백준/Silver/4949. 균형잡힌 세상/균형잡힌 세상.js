const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function balance(arr){
    let stack = [];
    let result = 1;
    for(let i=0; i<arr.length-1; i++) {
        if( arr[i] == '(' || arr[i] == '[' ) stack.push(arr[i]);
        else if((arr[i] == ')' && stack.pop() != '(') || (arr[i] == ']' && stack.pop() != '[')) {
            result=0; 
            break;
        }
    }
    if(stack.length > 0) result=0; //스택에 남아있는 괄호 처리
    return result;
}

let answer = [];
for(let i=0; i<input.length-1; i++){
    answer.push(balance(input[i].split('')) == 1? 'yes' : 'no')
}
console.log(answer.join('\n'))