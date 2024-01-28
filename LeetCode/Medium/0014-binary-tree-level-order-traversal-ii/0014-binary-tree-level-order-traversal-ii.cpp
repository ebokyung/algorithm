/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<vector<int> > levelOrderBottom(TreeNode *root) {
        vector<vector<int>> result;
        if(root == NULL)
            return result;
        stack<vector<int>> reverseOrder;
        vector<int> last;
        vector<TreeNode*> lastLevel;
        last.push_back(root->val);
        lastLevel.push_back(root);
        reverseOrder.push(last);
        while(lastLevel.size() > 0){
            vector<TreeNode*> tmp;
            vector<int> level;
            for(int i = 0; i < n; i++){
                TreeNode* node = lastLevel[i];
                if(node->left != NULL){
                    level.push_back(node->left->val);
                    tmp.push_back(node->left);
                }
                if(node->right != NULL){
                    level.push_back(node->right->val);
                    tmp.push_back(node->right);
                }
            }
            reverseOrder.push(level);
            lastLevel.clear();
            if(tmp.size() > 0){
                lastLevel.insert(lastLevel.end(), tmp.begin(), tmp.end());
            }
        }
        while(reverseOrder.size() > 0){
            result.push_back(reverseOrder.top());
            reverseOrder.pop();
        }
        return result;
    }
};