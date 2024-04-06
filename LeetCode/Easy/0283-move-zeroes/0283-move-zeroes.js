/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    for(let right=0; right<nums.length; right++){
        if(nums[right] !== 0) {
            nums[left] = nums[right]; // copy
            left++;
        }
    }
    for(let i=left; i<nums.length; i++){
        nums[i] = 0;
    }
};

// 1. 0이 아닌 수를 이동시키자!
// 2. 두 개 포인터 사용하기
// 3. 스왑이 아닌 카피하고, 나머지를 0으로 오버라이딩