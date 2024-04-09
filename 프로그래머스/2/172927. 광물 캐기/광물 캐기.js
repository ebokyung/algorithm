// 광물 배열의 개수가 최대 50밖에 안되므로 완전 탐색(재귀) 풀이 가능
function solution(picks, minerals) {
    var answer = Number.MAX_SAFE_INTEGER;
    
    // 곡괭이 개수의 합 * 5개 만큼의 광물 배열만 남기고 자르기
    let i = picks[0] + picks[1] + picks[2];
    if(minerals.length > i*5){
        minerals.splice(i*5);
    }
    
    // 광물 5개씩 쪼개기
    let chunks = [];
    let temp = [];
    for(let i=0; i<minerals.length; i++){
        temp.push(minerals[i]);
        if(temp.length == 5){
            chunks.push(temp);
            temp = [];
        }
    }
    if(temp.length != 0){
        chunks.push(temp);
    }

    // 완전 탐색: 모든 곡갱이로 i번째 chunk를 캐보면서 피로도를 구한다.
    function find(picks,chunks,i,pirodo){
        // console.log(arr,picks,i,pirodo)
        if(i == chunks.length){
            answer = Math.min(answer, pirodo)
            // console.log('get pirodo: ', answer)
            return;
        }

        // 다이아몬드 곡갱이
        if(picks[0] != 0){ 
            let p2 = [...picks];
            p2[0] -= 1;
            let temp = 1 * chunks[i].length;
            find(p2,chunks,i+1,pirodo+temp);
        }
        
        // 철 곡갱이
        if(picks[1] != 0){ 
            let p2 = [...picks];
            p2[1] -= 1;
            let temp =0;
            for(let j=0; j<chunks[i].length; j++){
              if(chunks[i][j] == 'diamond'){
                  temp+=5;
              }else{
                  temp+=1;
              }
            }
            find(p2,chunks,i+1,pirodo+temp);
        }

        // 돌 곡갱이
        if(picks[2] != 0){ 
            let p2 = [...picks];
            p2[2] -= 1;
            let temp =0;
            for(let j=0; j<chunks[i].length; j++){
              if(chunks[i][j] == 'diamond'){
                  temp+=25;
              }else if(chunks[i][j] == 'iron'){
                  temp+=5;
              }else{
                  temp+=1;
              }
            }
            find(p2,chunks,i+1,pirodo+temp);
        }

    }

    find(picks,chunks,0,0);

    return answer;
}