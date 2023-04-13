function solution(s1, s2) {
    let temp = new Set(s2)
    let answer = s1.filter(i => temp.has(i));
    return answer.length;
}