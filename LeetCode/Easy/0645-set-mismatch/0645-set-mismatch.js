/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let duplicate = 0, missing = 0
    let n = nums.length;
    const mp = new Map();
    while (n > 0) mp.set(n--, 0);

    nums.forEach(n => mp.set(n, mp.get(n) - 1))
    for(let [key, value] of mp) {
        if(value === 0) missing = key;
        if(value === -2) duplicate = key
    }

    return [duplicate, missing]
};