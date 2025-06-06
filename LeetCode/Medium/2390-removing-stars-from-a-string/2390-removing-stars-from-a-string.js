/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            if (stack.length > 0) stack.pop()
            continue
        }
        stack.push(s[i])
    }

    return stack.join('')

};