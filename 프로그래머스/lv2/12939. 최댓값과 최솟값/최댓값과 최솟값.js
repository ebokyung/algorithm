function solution(s) {
    var answer = '';
    
    const sorted = s.split(' ').map(i=>i*1).sort((a,b)=>(a-b))
    answer += sorted[0] + ' '
    answer += sorted[sorted.length - 1]
    
    return answer;
}