function solution(n, m, section) {
    let paint = section[0];
    let cnt = 1;
    for(let s of section) {
        if(s - paint >= m) {
            cnt +=1;
            paint = s;
        }
    }
    return cnt
}