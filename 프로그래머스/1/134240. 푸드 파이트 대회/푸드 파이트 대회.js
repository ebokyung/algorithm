function solution(food) {
    var answer = '';
    for(let i=1; i<food.length; i++){
        for(let j=1; j<=Math.floor(food[i]/2); j++){
            answer += i
        }
    }
    return answer + 0 + reverse(answer);
}

function reverse (str) {
    let result = '';
    const string = str.split('')
    for(let i=0; i<str.length; i++) result += string.pop()
    return result;
}