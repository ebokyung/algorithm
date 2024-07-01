function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const truckOnBridge = [], waitingTrucks = [...truck_weights];
    let weigthOnBridge = 0;
    
    while(truckOnBridge.length > 0 || waitingTrucks.length > 0){
        // 2. 다리 위에서 트럭 빼기
        if(truckOnBridge[0] && truckOnBridge[0][1] === time){
            weigthOnBridge -= truckOnBridge[0][0];
            truckOnBridge.shift();
        }
        
        // 1. 다리 위에 트럭 올리기
        if(weigthOnBridge + waitingTrucks[0] <= weight && truckOnBridge.length < bridge_length){
            const nextTruckWeight = waitingTrucks.shift();
            weigthOnBridge += nextTruckWeight;
            truckOnBridge.push([nextTruckWeight, time + bridge_length])
        } else { // 3. 무게가 넘거나 만차이면 나갈 시간으로 점프
            if(truckOnBridge[0]) {
                time = truckOnBridge[0][1];
                continue;
            }
        }
        
        time++;
    }
    
    return time;
}


// // 시간의 흐름을 고려하는 것이 핵심

// // 풀이 2.
// function solution(bridge_length, weight, truck_weights) {
//   // '다리'를 모방한 큐에 배열로 저장: [트럭무게, 얘가 나갈 시간].
//   let time = 0, qu = [[0,0]], weightOnBridge = 0;

//   // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
//   while (qu.length > 0 || truck_weights.length > 0) {
//     // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내고,
//     //    다리 위 트럭 무게 합에서 빼준다.
//     if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

//     if (weightOnBridge + truck_weights[0] <= weight) {
//       // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면 
//       //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
//       weightOnBridge += truck_weights[0];
//       qu.push([truck_weights.shift(), time + bridge_length]);
//     } else {
//       // 3. 다음 트럭이 못올라오는 상황이면 
//       //    큐의 첫번째 트럭이 빠지도록 그 시간으로 점프한다.
//       if (qu[0]) time = qu[0][1] - 1; // if 밖에서 1 더하기 때문에 -1
//     }
//     // 시간 업데이트 해준다.
//     time++;
//   }
//   return time;
// }

// // 풀이 1. 
// // function solution(bridge_length, weight, truck_weights) {
// //     let answer = 0;
// //     let cur_weight = weight;
// //     let idx = 0, time = 0;
// //     let q = []; // queue to store {weight, time}

// //     while (q.length > 0 || idx < truck_weights.length) {
// //         time++;

// //         // 1. 남은 트럭이 없으면 time = q에 마지막으로 들어간 트럭 입장 시간 + bridge_length 하고 나서 break
// //         if (idx >= truck_weights.length) {
// //             time = q[q.length - 1].time + bridge_length;
// //             break;
// //         }
        
// //         // 2. 현재 트럭 q에 넣을 수 있으면 넣은 다음에
// //         if (cur_weight >= truck_weights[idx]) {
// //             q.push({ weight: truck_weights[idx], time: time });
// //             cur_weight -= truck_weights[idx];
// //             idx++;
// //             // 2-1. q.front를 뺄 수 있으면 뺀다.
// //             // 다리를 건너는 트럭들이 다리를 다 건넜는지 확인하고, 다리를 완전히 건넌 트럭의 무게를 다리의 남은 허용 무게에 더해주기
// //             let temp = q[0];
// //             if (temp.time + bridge_length <= time) {
// //                 q.shift();
// //                 cur_weight += temp.weight;
// //             }
// //         } else { // 3. 넣을 수 없으면 자리 남을 때 까지 q에서 트럭 빼면서 time 갱신
// //             while (cur_weight < truck_weights[idx]) {
// //                 let temp = q.shift();
// //                 cur_weight += temp.weight;
// //                 time = temp.time + bridge_length;
// //             }
// //             // 3-1. 현재 트럭 q에 넣음
// //             q.push({ weight: truck_weights[idx], time: time });
// //             cur_weight -= truck_weights[idx];
// //             idx++;
// //         }
// //     }

// //     return answer = time;
// // }