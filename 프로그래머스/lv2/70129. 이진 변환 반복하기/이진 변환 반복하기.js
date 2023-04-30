function solution(s) {
    return converter(s, 0, 0);
}

function converter(s, repeatCnt, zeroCnt) {
    repeatCnt++;
    zeroCnt += s.split('').filter(i => i*1 === 0).length;
    const converted = s.replace(/0/g,'').length.toString(2);

    if (converted == 1) return [repeatCnt, zeroCnt]
    else return converter(converted, repeatCnt, zeroCnt);
}