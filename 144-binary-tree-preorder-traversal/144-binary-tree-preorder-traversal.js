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
var preorderTraversal = function(root) {
    // root=>left=>right
    
    var res =[];
    pre(root,res);
    return res;
};

function pre(root,res){
    
    if(root==null) return;
    
    if(root.val)   res.push(root.val);
    pre(root.val,res);
    pre(root.left,res);
    pre(root.right,res);

    
}