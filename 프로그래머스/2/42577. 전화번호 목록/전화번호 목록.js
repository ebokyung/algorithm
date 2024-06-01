function solution(phone_book) {
    var answer = true;
    
    const map = new Map();
    phone_book.forEach(phone_number => {
        map.set(phone_number, true)
    })
    
    for(let i=0; i<phone_book.length; i++){
        let cur_number = phone_book[i];
        let temp = ''
        for(let j=0; j<cur_number.length; j++){
            temp += cur_number[j]
            if(map.get(temp) && temp !== cur_number){
                answer = false;
                break;
            }
        }
        if(!answer) break;
    }
    
    return answer;
}

// index 접근이 아니라 key로 바로 접근하는 것이 효율성 문제의 핵심!