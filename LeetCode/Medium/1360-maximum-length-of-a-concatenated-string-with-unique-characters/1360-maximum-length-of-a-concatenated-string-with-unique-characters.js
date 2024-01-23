/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    let maxlength = 0;
    let solve = (start, curr) => {
        if (curr.length !== new Set(curr.split('')).size) {
            return;
        }
        maxlength = Math.max(maxlength, curr.length);
        for (let i = start; i < arr.length; i++) {
            solve(i + 1, `${curr}${arr[i]}`);
        }
    }
    solve(0, '');
    return maxlength;
};