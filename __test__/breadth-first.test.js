const Tree = require('../BinaryTree/breadth-first').Tree;
const BinaryTree = require('../BinaryTree/breadth-first').BinaryTree;

describe('happy path', () => {
  it('prints out a good sized tree', () => {
    let tree = new BinaryTree();

    tree.root = new Tree('A');
    tree.root.left = new Tree('B');
    tree.root.right = new Tree('C');
    tree.root.left.left = new Tree('D');
    tree.root.left.right = new Tree('E');
    tree.root.right.left = new Tree('F');

    expect(tree.breadthFirst()).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});