function solution(N, stages) {
    var failureArray = [];
    for(let i=1; i<=N; i++){
        const playingPlayer = stages.filter(s => s===i).length;
        const successPlayer = stages.filter(s => s > i).length;
        const failureRate = playingPlayer / successPlayer;
        failureArray.push({ stage: i, failureRate});
    }
    const result = failureArray.sort((a,b) => b.failureRate - a.failureRate).map(i => i.stage)

    return result;
}