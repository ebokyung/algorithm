function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    
    let reportedCnt = new Map();
    for (const [from, to] of reports){
        reportedCnt.set(to, reportedCnt.get(to) + 1 || 1)
    }

    let suspendCnt = new Map();
    for(const [from, to] of reports){
        if(reportedCnt.get(to) >= k){
            suspendCnt.set(from, suspendCnt.get(from) + 1 || 1)
        }
    }

    let answer = id_list.map(id => suspendCnt.get(id) || 0)
    return answer;
}