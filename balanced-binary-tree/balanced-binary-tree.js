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
 * @return {boolean}
 */
function isBalanced(root) {
  // helper function to calculate the height of a subtree
  function height(node) {
    if (!node) {
      return 0;
    }
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // base case: an empty tree is balanced
  if (!root) {
    return true;
  }

  // check if the left and right subtrees are height-balanced
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}