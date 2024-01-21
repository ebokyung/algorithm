/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0];

    let dp = Array(nums.length + 1).fill(0);

    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 2; i < dp.length; ++i) {
        dp[i] = Math.max((nums[i - 1] + dp[i - 2]), dp[i - 1])
    }

    return dp[dp.length - 1];
};