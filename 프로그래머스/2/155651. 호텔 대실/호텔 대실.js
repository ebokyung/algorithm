function solution(book_time) {
    let answer = 0;
    const books = book_time.sort(); // 입장시간 기준으로 정렬
    let endTimes = []; // 퇴장시간을 저장할 리스트

    books.forEach(([s, e]) => {
        let isUpdated = false;

        // 기존 퇴장시간 중 현재 입장시간(s)보다 작거나 같은 것을 찾음
        for (let i = 0; i < endTimes.length; i++) {
            if (endTimes[i] <= s) {
                // 해당 퇴장시간을 현재 입장시간에 해당하는 퇴장시간으로 갱신
                endTimes[i] = addMinutes(e, 10);
                isUpdated = true;
                break;
            }
        }

        // 갱신되지 않았다면 새로운 퇴장시간을 추가
        if (!isUpdated) {
            endTimes.push(addMinutes(e, 10));
        }

        // 리스트를 정렬하여 가장 빠른 퇴장시간이 항상 앞에 오도록 유지
        endTimes.sort();
    });

    // 퇴장시간 리스트의 크기가 필요한 방의 수
    return endTimes.length;
}

function addMinutes(timeStr, minutesToAdd) {
    // 시간과 분을 분리
    let [hours, minutes] = timeStr.split(':').map(Number);

    // 분을 더함
    minutes += minutesToAdd;

    // 분이 60 이상이면 시간과 분을 조정
    if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes = minutes % 60;
    }

    // 시간과 분을 두 자리 숫자로 포맷
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');

    return `${hours}:${minutes}`;
}