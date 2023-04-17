function solution(my_string, letter) {
    const reg = new RegExp(letter, 'g')
    return my_string.replace(reg, '')
}