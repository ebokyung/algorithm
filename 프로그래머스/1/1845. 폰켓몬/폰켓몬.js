function solution(nums) {
    let max = Math.floor(nums.length / 2);
    const kind = new Set(nums);
    
    return kind.size < max ? kind.size : max;
}