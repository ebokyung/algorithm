function solution(survey, choices) {
    var answer = '';
    let scores = [3,2,1,0,1,2,3]
    let mbti = new Map();
    
    for(let i=0; i<survey.length; i++){
        if(choices[i] === 4) continue;
        
        let typeIdx = 0;
        if(choices[i] > 4) typeIdx = 1;
        
        let score = scores[choices[i] - 1];
        
        let type = survey[i].split('')[typeIdx];
        mbti.set(type, mbti.get(type) + score || score)
    }
    
    let types = [['R', 'T'], ['C','F'], ['J','M'], ['A','N']]
    for(let [a,b] of types){
        answer += (mbti.get(a) || 0) >= (mbti.get(b) || 0) ? a : b
    }
    
    return answer;
}