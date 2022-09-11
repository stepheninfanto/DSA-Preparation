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
var inorderTraversal = function(root) {


    let node = root;
    const res =[];
    while(node){
        if(!node.left){
            res.push(node.val);
            node = node.right;
        }else{
            const pred = findRightLeafOfLeftSubTree(node);
            if(pred.right===node){ // cycle exists 
                pred.right=null;
                res.push(node.val);
                node=node.right;
            }else{//create a cycle
                pred.right=node;
                node=node.left;
            }
        }
    }
    
    return res;
};

function findRightLeafOfLeftSubTree(root){
    let node = root.left;
    while(node.right && node.right!==root){
        node= node.right;
    }
    return node;
}