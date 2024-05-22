function solution(babbling) {
    var answer = 0;
    let pronunciation = ['aya','ye','woo','ma']
    
    for(let i=0; i<babbling.length; i++) {
        let bab = babbling[i];
        for(let j=0; j<pronunciation.length; j++) {
            let pro = pronunciation[j];
            if(bab.includes(pro.repeat(2))) break;
            bab = bab.split(pro).join(' ')
            if(bab === ' ') continue;
        }
        if(bab.split(" ").join("").length === 0) answer++
    }
    
    return answer;
}