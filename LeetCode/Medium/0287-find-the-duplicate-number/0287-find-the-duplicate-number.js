/**
 * @param {number[]} nums
 * @return {number}
 */
// 플로이드의 토끼와 거북이 알고리즘 (Floyd's tortoise and Hare algorithm)
var findDuplicate = function (nums) {
    const n = nums.length; // [1,3,4,2,2]

    // 1. 반복 구간 찾기 (cycle detection)
    let cur = 0, next = 0;
    while (true) {
        cur = nums[cur]; // 1, 3, 4
        next = nums[nums[next]] // 3, 4, 4
        if (cur === next) break; // 4
    }

    // 2. 중복 숫자 찾기
    let check = 0;
    while (true) {
        cur = nums[cur]; // 2, 4, 2
        check = nums[check]; // 1, 3, 2
        if(cur === check) break; // 2
    }

    return check;
};