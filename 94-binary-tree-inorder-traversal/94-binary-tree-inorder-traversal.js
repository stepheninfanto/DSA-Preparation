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
 * @return {number[]}
 */

    
    
function inn(root,res){
    if(root==null) return;       
    inn(root.left,res);
    res.push(root.val);
    inn(root.right,res);
}
    
var inorderTraversal = function(root) {
    var res =[];
    inn(root,res);
    return res;

};
