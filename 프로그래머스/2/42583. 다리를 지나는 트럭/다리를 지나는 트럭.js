function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let cur_weight = weight;
    let idx = 0, time = 0;
    let q = []; // queue to store {weight, time}

    while (q.length > 0 || idx < truck_weights.length) {
        time++;

        // 1.
        if (idx >= truck_weights.length) {
            time = q[q.length - 1].time + bridge_length;
            break;
        }
        
        // 2.
        if (cur_weight >= truck_weights[idx]) {
            q.push({ weight: truck_weights[idx], time: time });
            cur_weight -= truck_weights[idx];
            idx++;
            // 2-1. 다리를 건너는 트럭들이 다리를 다 건넜는지 확인하고, 다리를 완전히 건넌 트럭의 무게를 다리의 남은 허용 무게에 더해주기
            let temp = q[0];
            if (temp.time + bridge_length <= time) {
                q.shift();
                cur_weight += temp.weight;
            }
        } else { // 3.
            while (cur_weight < truck_weights[idx]) {
                let temp = q.shift();
                cur_weight += temp.weight;
                time = temp.time + bridge_length;
            }
            // 3-1.
            q.push({ weight: truck_weights[idx], time: time });
            cur_weight -= truck_weights[idx];
            idx++;
        }
    }

    return answer = time;
}

// while() {
//  ++time
//  1. 남은 트럭이 없으면 time = q에 마지막으로 들어간 트럭 입장 시간 + bridge_length 하고 나서 (break)
// 2. 현재 트럭 q에 넣을 수 있으면 넣은 다음에
//      2-1. q.front를 뺄 수 있으면 뺀다.
// 3. 넣을 수 없으면 자리 남을 때 까지 q에서 트럭 빼면서 time 갱신
//      3-1. 현재 트럭 q에 넣음
// }