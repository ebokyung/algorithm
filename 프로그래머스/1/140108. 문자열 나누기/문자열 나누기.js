function solution(s) {
    var answer = 0;
    let sameCount = 0;
    let diffCount = 0;
    let temp = '';
    let isMatch = true;
    
    for(let i of s){
        if(isMatch) temp = i;
        
        if(temp == i) { 
            sameCount++;
            isMatch = false;
        } else diffCount++;
        
        if(sameCount === diffCount){
            answer++;
            sameCount = 0;
            diffCount = 0;
            isMatch = true;
        }
    }
    
    // 전부 맞아 떨어져서 값이 남는 경우
    if(sameCount !== 0 || diffCount !== 0) {
        return answer += 1;
    }
    
    return answer;
}