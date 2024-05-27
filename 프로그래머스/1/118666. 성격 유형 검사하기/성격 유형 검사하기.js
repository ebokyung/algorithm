// function solution(survey, choices) {
//     var answer = '';
//     let scores = [3,2,1,0,1,2,3]
//     let mbti = new Map();
    
//     for(let i=0; i<survey.length; i++){
//         if(choices[i] === 4) continue;
        
//         let typeIdx = 0;
//         if(choices[i] > 4) typeIdx = 1;
        
//         let score = scores[choices[i] - 1];
        
//         let type = survey[i].split('')[typeIdx];
//         mbti.set(type, mbti.get(type) + score || score)
//     }
    
//     let types = [['R', 'T'], ['C','F'], ['J','M'], ['A','N']]
//     for(let [a,b] of types){
//         answer += (mbti.get(a) || 0) >= (mbti.get(b) || 0) ? a : b
//     }
    
//     return answer;
// }

function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    // mbti 유형별 점수 초기화
    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
        // choice === 4 경우는 어차피 0이 더해져 상관없음
        // 1~7 -> -3~3 -> 절대값 0~3
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}
