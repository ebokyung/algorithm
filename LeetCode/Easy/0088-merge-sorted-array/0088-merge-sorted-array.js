/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
두 배열은 정렬되어 있음
nums1에 합쳐야 함
뒤에서부터
 */

const merge = function (nums1, m, nums2, n) {
    let i = m - 1; // nums1의 실제 데이터 마지막 인덱스
    let j = n - 1; // nums2의 마지막 인덱스
    let k = m + n - 1; // nums1의 전체 배열 마지막 인덱스

    // nums2의 모든 요소를 nums1에 병합할 때까지 반복
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]; // 더 큰 값을 뒤로 이동
            i--;
        } else {
            nums1[k] = nums2[j]; // nums2[j]를 뒤로 이동
            j--;
        }
        k--; // 다음 위치로 이동
    }
};