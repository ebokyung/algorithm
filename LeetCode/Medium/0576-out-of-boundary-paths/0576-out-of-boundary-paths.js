/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    let memo = new Map();
    const MOD = 10 ** 9 + 7;

    const getWaysCount = (currRow, currCol, maxMove) => {
        let key = `${maxMove}[${currRow},${currCol}]`;

        if (memo.has(key)) return memo.get(key);

        const isOutside = currRow === -1 || currRow === m || currCol === -1 || currCol === n;
        if (maxMove === 0 || isOutside) return +isOutside; // true -> 1

        let count = 0;

        const directions = [[currRow - 1, currCol], [currRow + 1, currCol], [currRow, currCol - 1], [currRow, currCol + 1]];
        for (let [r, c] of directions) {
            count = (count + getWaysCount(r, c, maxMove - 1)) % MOD;
        }

        memo.set(key, count);
        return count;
    }

    return getWaysCount(startRow, startColumn, maxMove)
};