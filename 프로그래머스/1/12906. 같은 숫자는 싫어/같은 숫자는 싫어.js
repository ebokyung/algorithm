function solution(arr) {
    const stack =[];
    arr.forEach(el => {
        if(stack[stack.length - 1] !== el) stack.push(el)
    })
    return stack
}