/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const table = new Array(nums.length + 2);
    
    table[nums.length + 0] = 0;
    table[nums.length + 1] = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        const sumIfSkipped = table[i + 1];
        const sumIfRobbed = nums[i] + table[i + 2];
        
        table[i] = Math.max(sumIfSkipped, sumIfRobbed);
    }
    
    return table[0];
};