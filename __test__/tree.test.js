'use strict';

const trees = require('../tree/tree');
const Node = trees.Node;
const BT = trees.BinaryTree;


describe('Binary Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BT();

    expect(tree).toBeDefined();
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BT();
    let newNode = new Node('1');
    tree.root = newNode;

    expect(tree.root.value).toBe('1');
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BT();
    let newNode = new Node('1');
    tree.root = newNode;

    let leftChild = new Node('2');
    let rightChild = new Node('3');

    tree.root.left = leftChild;
    tree.root.right = rightChild;

    expect(tree.root.value).toBe('1');
    expect(tree.root.left.value).toBe('2');
    expect(tree.root.right.value).toBe('3');
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BT();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.right = new Node('F');
    // preOrder: A B D E C F
    let traversalResults = tree.preOrder();
    expect(traversalResults).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let tree = new BT();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.right = new Node('F');
    // inOrder: D B E A C F
    let traversalResults = tree.inOrder();
    expect(traversalResults).toEqual(['D', 'B', 'E', 'A', 'C', 'F']);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let tree = new BT();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.right = new Node('F');
    // postOrder: D E B F C A
    let traversalResults = tree.postOrder();
    expect(traversalResults).toEqual(['D', 'E', 'B', 'F', 'C', 'A']);
  });
});
