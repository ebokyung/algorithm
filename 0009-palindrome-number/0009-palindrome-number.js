/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    const numToStrArr = x.toString().split('')
    for(let i = 0; i < Math.floor(numToStrArr.length / 2); i++){
        if(numToStrArr[i] !== numToStrArr[numToStrArr.length - 1*(i+1)]) return false;
    }
    return true;
};