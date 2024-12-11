/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     let k = 0;  // 유효한 요소를 저장할 위치를 가리키는 포인터

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// };

// 공간 복잡도 O(1)
// 시간 복잡도 O(n)

var removeElement = function(nums, val) {
    let p1 = 0;
    let p2 = nums.length - 1

    while(p1 <= p2){
        if(nums[p1] === val){
            nums[p1] = nums[p2]
            p2--;
        }else {
            p1++;
        }
    }
    return p1
}