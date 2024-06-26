function solution(weights) {
    var answer = 0;
    const torques = {};
    const cases = [1, 3/2, 2, 4/3];
    
    weights.sort((a, b) => b - a);
    
    for(let w of weights){
        for(let c of cases){
            const torque = w * c;
            if(torques[torque]) answer += torques[torque];
        }
        if(torques[w]) torques[w]++;
        else torques[w] = 1;
    }
    
    return answer;
}