/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    arr.forEach((value) => map.set(value, (map.get(value) || 0) + 1));
    return map.size === new Set(map.values()).size
};