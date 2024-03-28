function solution(number, limit, power) {
    const divisorCountArr = []
    while(number){
        divisorCountArr.push(getNumOfDivisor(number--))
    }
    return divisorCountArr.reduce((acc, cur) => {
        return cur > limit ? acc + power : acc + cur
    }, 0)
}

function getNumOfDivisor(num) {
    let result =0;
    for(let i=1; i<= Math.sqrt(num); i++){
        if(num % i === 0) {
            result++;
            if(num / i !== i) result++;
        }
    }
    return result;
}