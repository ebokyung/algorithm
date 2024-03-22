function solution(today, terms, privacies) {
    const todayDate = new Date(today)
    
    const termsTable = {}
    terms.forEach(term => {
        const [key, value] = term.split(' ')
        termsTable[key] = +value
    })
    
    const result = []
    privacies.forEach((privacy, idx) => {
        const [startDateStr, termName] = privacy.split(' ')
        const endDate = getEndDate(startDateStr, termsTable[termName])
        if(todayDate - endDate > 0) result.push(idx+1)
    })
    return result
}


function getEndDate(startDate, m) {
    let [yyyy, mm, dd] = startDate.split('.').map(Number)
    
    if(dd - 1 === 0) {
        dd = 28
        mm -= 1
    } else {
        dd -= 1
    }
    
    if(mm + m > 12) {
        let temp = mm + m;
        if(temp % 12 === 0){
            mm = 12
            yyyy += Math.floor((temp - 1) / 12)
        } else {
            mm = temp % 12
            yyyy += Math.floor(temp / 12)
        }
    } else {
        mm += m
    }

    return new Date([yyyy, mm, dd].join('.'));
}
