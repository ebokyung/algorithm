function solution(h1, m1, s1, h2, m2, s2) {
    // 각 벨 카운트를 구하여 차이를 구한다.
    const timeToSecond2 = toSecond(h2, m2, s2);
    const timeToSecond1 = toSecond(h1, m1, s1);
    const diffCount = countAlarm(timeToSecond2) - countAlarm(timeToSecond1);

    // 시작 시간을 제외하였으므로 시작 시간이 겹치는지 확인한다.
    if (isOverlap(h1, m1, s1)) {
        return diffCount + 1;
    }
    return diffCount;
}

const toSecond = (hour, minute, second) => {
    let result = hour * 60 * 60;
    result += minute * 60;
    result += second;
    return result;
};

const countAlarm = (second) => {
    /*
    시침은 1분에 1번씩 겹친다.
    1시간이 지나면 시침의 각도가 30도 움직이고 그만큼 겹치는 시간이 딜레이된다.
    실제 시침과 초침이 겹치는 시간은 1분보다 길며 12시간동안 719번 겹치게 된다.
    */
    const hourAlarmCount = Math.floor((second * 719) / 43200);

    /*
    분침은 1분에 1번씩 겹친다.
    1분이 지나면 6도 움직이고 그만큼 겹치는 시간이 딜레이된다.
    실제 분침과 초침이 겹치는 시간은 1분보다 길며 1시간동안 59번 겹치게 된다.
    */
    const minuteAlaramCount = Math.floor((second * 59) / 3600);

    // 12시에는 정확히 시침 분침 초침이 일치한다.
    const penalty = second >= 12 * 3600 ? 1 : 0;

    // 0시 0분 0초의 값을 추가하지 않아 마지막 결과에 추가해준다.
    return 1 + hourAlarmCount + minuteAlaramCount - penalty;
};

const isOverlap = (hour, minute, second) => {
    const hourAngle = ((hour * 30) + (minute * 0.5) + ((second * 0.5) / 60)) % 360;
    const minuteAngle = (minute * 6) + (second * 0.1);
    const secondAngle = second * 6;
    return hourAngle === secondAngle || minuteAngle === secondAngle;
};
