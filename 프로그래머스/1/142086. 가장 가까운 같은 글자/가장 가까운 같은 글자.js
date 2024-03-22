function solution(s) {
    var answer = [];
    const map = new Map();
    s.split('').forEach((letter,index) => {
        if(map.has(letter)){
            answer.push(index - map.get(letter))
        } else {
            answer.push(-1)
        }
        map.set(letter, index)
    })
    return answer;
}