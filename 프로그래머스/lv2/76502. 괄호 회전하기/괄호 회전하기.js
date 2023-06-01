function checker(testcase) {
    if(testcase[0] === ')' || testcase[0] === ']' || testcase[0] === '}') {
        return 0;
    } else {
        let stack = [];
        for(const i of testcase){
            if(i === '(' || i === '[' || i === '{') stack.push(i)
            else {
                let x = stack[stack.length-1];
                if( (x === '(' && i === ')') || (x === '[' && i === ']') || (x === '{' && i === '}') ) stack.pop();
            }
        }
        return stack.length > 0 ? 0 : 1;
    }
}

function solution(s) {
    let answer = 0;
    for(let i=1; i<s.length; i++){
        answer += checker(s);
        s = s.slice(1) + s[0];
    }
    return answer;
}