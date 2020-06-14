'use strict';

const Node = require('../tree/tree.js').Node;
const BinaryTree = require('../tree/tree').BinaryTree;

let newTree = new BinaryTree(10);
let thirteen = new Node(13);
let fifteen = new Node(15);
let six = new Node(6);
let eight = new Node(8);

newTree.root.left = thirteen;
newTree.root.left.left = fifteen;
newTree.root.left.right = six;
newTree.root.right = eight;

newTree.inOrder();

function fizzBuzzTree(tree) {
  const traverse = (node) => {
    if (typeof node.value !== 'number') return `${node.value} is not a number`;

    if (node.left) traverse(node.left);

    if (node.value % 5 === 0 && node.value % 3 === 0) node.value = 'FizzBuzz';
    if (node.value % 5 === 0) node.value = 'Buzz';
    if (node.value % 3 === 0) node.value = 'Fizz';

    if (node.right) traverse(node.right);
  };

  try {
    if (!tree) return `not called by a binary tree of integers.`;
    traverse(tree.root);
    return tree;
  }
  catch(err) {
    return `ERROR: ${err}`;
  }

}
fizzBuzzTree(newTree).inOrder();

module.exports = fizzBuzzTree;