/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const n = nums.length
    const actual_sum = sum(nums)  // 1 + 2 + 2 + 4 = 9
    const unique_sum = sum(new Set(nums))  // sum({1, 2, 4}) = 7
    const expected_sum = n * (n + 1) / 2  // 4 * (5) // 2 = 10

    const duplicate = actual_sum - unique_sum
    const missing = expected_sum - unique_sum
    return [duplicate, missing]
};

function sum (arr) {
    return Array.from(arr).reduce((acc, cur) => acc += cur, 0)
}