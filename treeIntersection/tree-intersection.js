'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree_intersection = (tree1, tree2) => {
  if (!(tree1 instanceof Node) || !(tree2 instanceof Node)) return 'both inputs must be binary trees';

  let arr = [];

  let addNode = (node) => {
    arr.push(node.value);
    if (node.left) addNode(node.left);
    if (node.right) addNode(node.right);
  };

  addNode(tree1.root);
  let results = [...arr];
  arr = [];

  addNode(tree2.root);
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === results[i]) {
      output.push(arr[i]);
    }
  }
  return output;
};


module.exports = { tree_intersection, Node };