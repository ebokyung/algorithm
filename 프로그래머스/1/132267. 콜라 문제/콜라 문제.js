function solution(a, b, n) {
    var answer = 0;
    
    let cola = n;
    
    while(cola >= a){
        let recieved = Math.floor(cola / a) * b;
        cola = recieved + Math.floor(cola % a)
        answer += recieved
    }
    
    return answer;
}