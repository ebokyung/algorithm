function solution(s){
    if(s.length % 2 !== 0) return false;
    if(s[0] === ')') return false;
    let stack = [];
    for(const i of s){
        if(i === '(') stack.push(i)
        else stack.pop()
    }
    return !stack.length;
}

console.log( solution('())') );

// function is_pair(s){
//   var result = s.match(/(\(|\))/g);
//   return result[0] == '(' && result.length % 2 == 0 ? true : false
// }