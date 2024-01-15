/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0;
    let share = x;

    while( share > 0 ) {
        const digit = share % 10;
        reverse = reverse * 10 + digit;
        share = ~~(share / 10)
    }

    return reverse == x;
};