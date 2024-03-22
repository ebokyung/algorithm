function solution(id_list, report, k) {
    var answer = [];
    const statistic = {}
    id_list.forEach(userId => {
        statistic[userId] = { reported: [], suspendCnt: 0 }
    })
    
    report.forEach(r => {
        const [from, to] = r.split(' ');
        if(!statistic[to]['reported'].includes(from))
            statistic[to]['reported'].push(from);
    })
    
    id_list.forEach(userId => {
        if(statistic[userId]['reported'].length >= k){
            statistic[userId]['reported'].forEach(id => {
                statistic[id]['suspendCnt'] += 1
            })
        }
    })
    
    id_list.forEach(userId => answer.push(statistic[userId]['suspendCnt']))
    return answer;
}