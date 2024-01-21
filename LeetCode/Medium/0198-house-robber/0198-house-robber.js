/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let robbedIdxPlus1 = 0;
    let robbedIdxPlus2 = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        const sumIfSkipped = robbedIdxPlus1;
        const sumIfRobbed = nums[i] + robbedIdxPlus2;
        
        const maxRobbedAtIdx = Math.max(sumIfSkipped, sumIfRobbed);
        
        robbedIdxPlus2 = robbedIdxPlus1;
        robbedIdxPlus1 = maxRobbedAtIdx;
    }
    
    return robbedIdxPlus1;
};