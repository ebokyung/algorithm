function solution(my_str, n) {
    let reg = new RegExp(`\\w{1,${n}}`, 'g')
    return my_str.match(reg)
}