/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * nums1 = [1,2,3,0,5,6]
 *              p1  p
 * nums2 = [2,5,6]
 *            p2
 */

var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;  // nums1의 마지막 유효한 요소 인덱스
    let p2 = n - 1;  // nums2의 마지막 요소 인덱스
    let p = m + n - 1;  // nums1의 마지막 인덱스

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
        console.log(nums1, p, p1, p2)
    }
};

// 풀이: 두 배열의 끝에서부터 시작하여 큰 값을 nums1의 뒤쪽부터 채워나가기
// 공간 복잡도 O(1)
// 시간 복잡도 O(m + n)