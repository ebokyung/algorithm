/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const hash = new Map()

    arr.forEach((num) => {
        if (hash.has(num)) hash.set(num, hash.get(num) + 1)
        else hash.set(num, 1)
    })

    const occurrences = Array.from(hash.values())
    return occurrences.length === new Set(occurrences).size
};