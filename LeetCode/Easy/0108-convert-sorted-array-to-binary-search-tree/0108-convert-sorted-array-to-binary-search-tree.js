/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const createBST = (left, right) => {
        if(left > right) return null;

        const mid = Math.floor((left+right)/2)
        const currentNode = new TreeNode(nums[mid])
        currentNode.left = createBST(left, mid-1)
        currentNode.right = createBST(mid+1, right)

        return currentNode
    }

    return createBST(0, nums.length-1)
};