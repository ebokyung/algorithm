const ALPHABETS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function solution(s, skip, index) {
    const skipAlpabets = skip.split('');
    
    const keySecret = {};
    const IndexSecret = {};
    let idx = 0;
    ALPHABETS.forEach(alphabet => {
        if(skipAlpabets.indexOf(alphabet) === -1) {
            keySecret[alphabet] = idx;
            IndexSecret[idx++] = alphabet;
        }
    })
    
    let answer = '';
    s.split('').forEach(letter => {
        const realIndex = (keySecret[letter] + index) % idx;
        answer += IndexSecret[realIndex]
    })
    return answer;
}