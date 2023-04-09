function solution(A,B){
    var answer = 0;

    A.sort((a,b) => (a-b))
    B.sort((a,b) => (b-a))
    
    let idx = 0;
    answer = A.reduce((acc, cur) => acc + cur*B[idx++], 0)
    
    return answer;
}