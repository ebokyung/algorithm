// 1. 내 접두어를 가진 단어가 있는지
function solution(phone_book){
    let answer = true;
    
    const map = new Map();
    
    for(let phone_number of phone_book){
        map.set(phone_number, true)
    }
    
    for(let phone_number of phone_book){
        let cur_prefix = '';
        for(let i=0; i<phone_number.length; i++){
            cur_prefix += phone_number[i];
            if(map.get(cur_prefix) && cur_prefix !== phone_number){
                answer = false;
                break;
            }
        }
        if(!answer) break;
    }
    
    return answer;
}

// 2. 내가 다른 단어의 접두어인지
// function solution(phone_book){
//     let answer = true;
    
//     phone_book.sort((a,b) => a < b ? -1 : 1)
    
//     for(let i=0; i<phone_book.length - 1; i++){
//         if(phone_book[i+1].startsWith(phone_book[i])){
//             answer = false;
//             break;
//         }
//     }
    
//     return answer;
// }