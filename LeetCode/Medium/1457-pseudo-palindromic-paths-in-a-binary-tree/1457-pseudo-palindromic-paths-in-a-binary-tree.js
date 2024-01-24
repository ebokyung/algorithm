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
var pseudoPalindromicPaths  = function(root) {
    let count = 0;
    let stack = [[root, 0]];

    while (stack.length > 0) {
        let [node, path] = stack.pop();

        if (node !== null) {
            path ^= 1 << node.val;
            // console.log(node.val, path.toString(2));

            // leaf 노드에 도착하면
            if (node.left === null && node.right === null) {
                // console.log('(path & (path - 1):', path & (path - 1))
                if ((path & (path - 1)) === 0) {
                    count += 1;
                }
            } else {
                stack.push([node.right, path]);
                stack.push([node.left, path]);
            }
        }
    }

    return count;
};

// path는 각 숫자의 발생을 추적하는 변수
// path = path ^ (1 << node.val)
// XOR(^) 연산자는 다르면 1, 같으면 0을 반환하므로
// 이미 발생한 숫자면 해당 자리를 0으로, 새로운 숫자면 1로 변환한다.
// 최종적인 path 값에서 짝수번 발생한 숫자는 0이 홀수번 발생한 숫자는 1이 된다.
// 따라서 홀수번 발생한 숫자는 1개여야하므로 path값이 2의 거듭제곱인 것이 의사 회문이 되는 것이다.
// 2의 거듭제곱은 한 비트만 1이고, 나머지 비트는 0인 것을 말하며
// path와 path-1을 AND(&) 연산을 통해 알 수 있다.
// AND 연산자는 같으면 1, 다르면 0을 반환한다.