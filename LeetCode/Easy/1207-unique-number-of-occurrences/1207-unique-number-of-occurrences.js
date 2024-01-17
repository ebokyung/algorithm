/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const valueCounts = {};
    arr.forEach((value) => valueCounts[value] = ~~valueCounts[value] + 1);
    const occurrences = Object.values(valueCounts);
    return occurrences.length == new Set(occurrences).size
};