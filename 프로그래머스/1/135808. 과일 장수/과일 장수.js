function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => b-a)
    for(let i=0; i<Math.floor(score.length/m); i++){
        const box = score.slice(i * m, (i+1) * m)
        const min = Math.min.apply(null, box)
        answer += min * m
    }
    return answer;
}