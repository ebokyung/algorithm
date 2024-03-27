function solution(targets) {
    var answer = 0;
    targets.sort((a,b) => a[0]-b[0])
    let bound = 0;
    targets.forEach(([s,e]) => {
        if(bound > s) bound = Math.min(bound, e)
        else {
            bound = e;
            answer++;
        }
    })
    return answer;
}