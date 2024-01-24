/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
    return dfs(root, 0)
};

const dfs = (node, mask) => {
    if (!node) {
        return 0;
    }

    mask ^= 1 << node.val; // toggle bit for each number

    if (!node.left && !node.right) {
        return (mask & (mask - 1)) == 0 ? 1 : 0;
    }

    // Recursively traverse left and right subtrees
    return dfs(node.left, mask) + dfs(node.right, mask);
};