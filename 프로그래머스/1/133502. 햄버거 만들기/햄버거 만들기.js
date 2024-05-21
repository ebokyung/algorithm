function solution(ingredient) {
    var answer = 0;
    let stack = [];
    
    ingredient.forEach((ing) => {
        stack.push(ing)
        
        if(stack.length >= 4) {
            if(stack.slice(-4).join('') === '1231'){
                stack.pop()
                stack.pop()
                stack.pop()
                stack.pop()
                answer++
            }
        }
    })
    
    return answer;
}