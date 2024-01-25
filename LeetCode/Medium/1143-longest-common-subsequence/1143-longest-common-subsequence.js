/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const length1 = text1.length;
    const length2 = text2.length;

    const dp = new Array(length1 + 1).fill(0).map(() => new Array(length2 + 1).fill(0));

    for (let i = 1; i <= length1; ++i) {
        for (let j = 1; j <= length2; ++j) {
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[length1][length2];
}

/* 최장 공통 부분 수열(Longest Common Subsequence, LCS)
* 2차원 배열을 생성, 모든 하위 문제에 대한 최장 공통 부분 수열의 길이를 저장
* 이중 반복문을 사용하여 dp 배열 순회
* 각 위치에서 문자가 일치하는 경우, 대각선 값에 1을 더한 값을 저장
* 일치하지 않는 경우에는 왼쪽 값(dp[i][j-1])과 위쪽 값(dp[i-1][j]) 중에서 최댓값을 선택하여 저장
*/