function solution(n, arr1, arr2) {
    const answer = []
    const map1 = arr1.map((num) => changeDecimalToBinary(num));
    const map2 = arr2.map((num) => changeDecimalToBinary(num));
    for(let i=0; i<n; i++){
        const decode = map1[i].split('').map((val, index) => {
            return val | map2[i][index] ? '#': ' '
        });
        answer.push(decode.join(''));
    }
    return answer;
    
    function changeDecimalToBinary(decimal){
        const binary = decimal.toString(2);
        const temp = [];
        for(let i=0; i < n-binary.length; i++){
            temp.push(0);
        }
        temp.push(binary);
        return temp.join('');
    }
}
