function solution(s){
    if(s[0] === ')') {
        return false;
    } else {
        let stack = []
        for(const i of s){
            if(i === '(') stack.push(i)
            else stack.pop()
        }
        return stack.length > 0 ? false : true;
    }
}