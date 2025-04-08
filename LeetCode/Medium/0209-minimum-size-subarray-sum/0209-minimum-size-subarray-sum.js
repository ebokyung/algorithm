/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let p1 = 0, p2 = 0
    let minLength = Number.MAX_SAFE_INTEGER
    let sum = 0

    if(nums.length === 1) {
        if(nums[p1] >= target)
        return 1
    } 

    while(p2 !== nums.length){
        if(p1 === p2 && nums[p1] >= target) {
            return 1
        } 

        sum += nums[p2++]
        if(sum >= target){
            const subArrayLength = p2 - p1
            minLength = Math.min(subArrayLength || 1, minLength)
            sum = 0
            p2 = ++p1
        }
    }

    return minLength > 1000000000 ? 0 : minLength
};