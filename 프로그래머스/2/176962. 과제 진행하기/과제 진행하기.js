function solution(plans) {
    var answer = [];
    
    plans.forEach((p, idx) => {
        const [hour, minute] = p[1].split(':').map(Number);
        const time = hour * 60 + minute;
        plans[idx][1] = time;
    })
    plans.sort((a,b) => a[1] - b[1])
    
    let diff = [] // ***
    for(let i=0; i<plans.length-1; i++){
        diff.push(plans[i+1][1] - plans[i][1])
    }
    
    let stop = []
    for(let i=0; i<diff.length; i++){
        if(plans[i][2] > diff[i]){
            stop.push([plans[i][0], plans[i][2] - diff[i]])
        } else {
            answer.push(plans[i][0])
            let time = diff[i] - plans[i][2]
            while(stop.length > 0){
                const last = stop.pop()
                if(last[1] <= time) {
                    time -= last[1]
                    answer.push(last[0])
                } else {
                    stop.push([last[0], last[1] - time])
                    break;
                }
            }
        }
    }
    
    // ***
    answer.push(plans.at(-1)[0]);
    while (stop.length > 0) {
        answer.push(stop.pop()[0]);
    }
    
    return answer;
}

// 1. 시작 시간 기준으로 정렬
// 2. 과제 사이 시간 차이 구하기 ***
// 3. 과제를 마치는데 걸리는 시간이 과제 사이 시간보다 작으면 과제 끝
//    아니면 남은 시간을 구해 잠시 멈춘 과제에 담기
// 4. 마지막 과제 전까지 처리하지 못한 과제 역순으로 담기