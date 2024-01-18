/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // key point: 너비는 좁히면서, 높이는 높이면서 면적 확인
    let max = 0, i = 0, j = height.length - 1;
    while (i < j) {
        const minHeight = Math.min(height[i], height[j]);
        const amount = minHeight * (j - i);
        if (amount > max) max = amount;
        minHeight === height[i] ? i++ : j--;
    }
    return max;
};