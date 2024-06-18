function solution(storey) {
    var answer = 0;
    
    while(storey != 0){
        const temp = storey % 10;
        
        if(temp >= 6) {
            answer += 10 - temp; 
            storey += 10 - temp; 
        } else if (temp == 5 && (~~(storey / 10)) % 10 >= 5){
            answer += 10 - temp;
            storey += 10 - temp;
        } else { // temp < 5 || (temp == 5 && (storey / 10) % 10 < 5)
            answer += temp; 
        }
        
        storey = Math.floor(storey / 10);
    }
    
    return answer;
}