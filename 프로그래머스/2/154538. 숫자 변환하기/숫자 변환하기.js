// 시간 통과 풀이: bfs로 y -> x 만들기
function solution(x, y, n) {
    const calc = (num, action) => {
        switch(action){
            case '더하기n':
                return num - n;
            case '곱하기2':
                return num % 2 === 0 ? num / 2 : 0;
            case '곱하기3':
                return num % 3 === 0 ? num / 3 : 0;
        }
    }

    const bfs = () => {
        let queue = [[y,0]];
        let visit = {};
        visit[y] = 1;

        while(queue.length){
            let [cur, count] = queue.shift();

            if(cur === x) return count;

            for (action of ['더하기n', '곱하기2', '곱하기3']) {
                let next = calc(cur, action);
                if(next >= x && !visit[next]){
                    visit[next] = 1;
                    queue.push([next, count+1]);
                }
            }
        }

        return -1;
    }


    return bfs();
}

// 시간 초과 풀이: bfs로 x -> y 만들기
// function solution(x, y, n){
//     const queue = [];
//     queue.push([x, 0]);
//     const visited = Array.from({ length: 1000001 }, () => 0);
//     visited[x] = 1;

//     while (queue.length) {
//         const [cur, cnt] = queue.shift();
//         if (cur === y) return cnt;
//         for (next of [cur + n, cur * 2, cur * 3]) {
//           if (!visited[next] && next >= 0 && next <= 1000000) {
//             visited[next] = 1;
//             queue.push([next, cnt + 1]);
//           }
//         }
//     }

//     return -1;
// }
