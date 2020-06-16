'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaximumValue(root = this.root) {

    if (!root) return;

    let rootMax = root.val;
    let lMax;
    let rMax;

    if (root.left) {
      lMax = this.findMaximumValue(root.left);
    }
    if (root.right){
      rMax = this.findMaximumValue(root.right);
    } 

    let max = rootMax;
    if (lMax > max) max = lMax;
    if (rMax > max) max = rMax;

    return max;
  }
}
let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(5);
tree.root.right = new Node(9);
tree.root.left.left = new Node(-2);
tree.root.left.right = new Node(4);
tree.root.right.right = new Node(3);

console.log(tree.findMaximumValue());
