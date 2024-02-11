// - 10진수로 바로 비트 연산해도 동일하다는 점
// - toString(2)로 2진수로 변환
// - replace와 표현식으로 값 바로 바꾸기
// - 자릿수 맞추는 방법
//   1. padStart() 메서드
//   2. '0'.repeat() 이용하기

function solution(n, arr1, arr2) {
    const answer = []
    const map1 = arr1.map((num) => changeDecimalToBinary(num));
    const map2 = arr2.map((num) => changeDecimalToBinary(num));
    for(let i=0; i<n; i++){
        console.log(arr1[i] | arr2[i], (arr1[i] | arr2[i]).toString(2))
        console.log(arr1[i].toString(2), arr2[i].toString(2))
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


// 다른 풀이 1.
// function solution(n, arr1, arr2) {
//     return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }
// const addZero = (n, s) => {
//     return '0'.repeat(n - s.length) + s;
// }

// 다른 풀이 2.
// var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))