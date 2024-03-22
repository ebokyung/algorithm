function solution(t, p) {
    let answer = 0;
    const pLength = p.length;
    const pNum = parseInt(p)
    for(let i=0; i<=t.length - pLength; i++){
        const subStr = t.slice(i, i+pLength);
        if(parseInt(subStr) <= pNum) answer++;
    }
    return answer;
}