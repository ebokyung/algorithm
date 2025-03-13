/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 3 2 2 3
// p1
//       p2
// 1. p1 제거 대상이니까 p2 할당
//    p2 왼쪽으로 이동

// 3 2 2 3
// p1
//     p2
// 2. p1 제거 대상이니까 p2 할당, p2 왼쪽으로 이동

// 2 2 2 3
// p1
//   p2
// 3. p1 제거 대상 아니므로 p1 오른쪽으로 이동

// 2 2 2 3
//   p1
//   p2
// 4. p1, p2 인덱스가 동일해서 종료

const removeElement = (nums, val) => {
    let p1 = 0, p2 = nums.length - 1

    while(p1 <= p2) {
        if(nums[p1] === val) {
            nums[p1] = nums[p2--]
        } else {
            p1++
        }
        console.log(nums)
    }

    return p1
}