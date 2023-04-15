function solution(s) {
    let answer = ''
    let words = s.toLowerCase().split(' ')
    words = words.map(i => i ? i[0].toUpperCase() + i.slice(1) : '')
    return words.join(' ')
}