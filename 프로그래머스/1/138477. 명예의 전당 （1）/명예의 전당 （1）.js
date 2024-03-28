function solution(k, score) {
    var answer = [];
    const hallOfFame = []

    score.forEach(s => {
        hallOfFame.push(s);
        if(hallOfFame.length <= k){
            hallOfFame.sort((a,b) => b-a)
            answer.push(hallOfFame[hallOfFame.length - 1])
        }else {
            hallOfFame.sort((a,b) => b-a).splice(k)
            answer.push(hallOfFame[k-1])
        }
    })
    return answer;
}