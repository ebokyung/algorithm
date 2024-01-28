/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    if (strs.length == 1) return strs[0];

    var longestStr = strs[0];
    var length = longestStr.length;

    while (length > 0) {
        for (var i = 1; i < strs.length; i++) {
            if (strs[i].slice(0, length) != longestStr) {
                break
            } else {
                if (i == strs.length - 1) {
                    return longestStr.slice(0, length);
                }
            }
        }

        longestStr = longestStr.slice(0, --length);
    }

    return '';
};

// var longestCommonPrefix = function (strs) {
//     if (strs === undefined || strs.length === 0) { return ''; }

//     return strs.reduce((prev, next) => {
//         console.log(prev, next)
//         let i = 0;
//         while (prev[i] && next[i] && prev[i] === next[i]) i++;
//         return prev.slice(0, i);
//     });
// };