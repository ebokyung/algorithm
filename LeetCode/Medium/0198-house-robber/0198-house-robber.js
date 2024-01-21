/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev = 0, cur = 0
    nums.forEach(n => cur = Math.max(n + prev, prev = cur))
    return cur
};