function solution(arr) {
    let answer = 1;
    
    arr.sort((a,b)=>(b-a))
    
    for(let i=0; i<arr.length; i++){
        // 최소 공배수
        answer = answer*arr[i] / GCD(answer, arr[i])
    }
    
    return answer;
}

// 최대 공약수
function GCD(a,b){
    return b ? GCD(b, a%b) : a;
}