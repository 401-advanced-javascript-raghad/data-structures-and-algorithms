'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(root = this.root) {
    if (!root) return;

    let rootArr = [];
    let leftArr = [];
    let rightArr = [];
    rootArr.push(root.value);

    if (root.left) {
      leftArr = this.preOrder(root.left);
    }

    if (root.right) {
      rightArr = this.preOrder(root.right);
    }

    rootArr = [...rootArr, ...leftArr, ...rightArr];
    return rootArr;
  }

  inOrder(root = this.root) {
    if (!root) return;

    let rootArr = [];
    let leftArr = [];
    let rightArr = [];
    rootArr.push(root.value);

    if (root.left) {
      leftArr = this.inOrder(root.left);
    }

    if (root.right) {
      rightArr = this.inOrder(root.right);
    }

    rootArr = [...leftArr, ...rootArr, ...rightArr];
    return rootArr;
  }

  postOrder(root = this.root) {
    if (!root) return;

    let rootArr = [];
    let leftArr = [];
    let rightArr = [];
    rootArr.push(root.value);

    if (root.left) {
      leftArr = this.postOrder(root.left);
    }

    if (root.right) {
      rightArr = this.postOrder(root.right);
    }

    rootArr = [...leftArr, ...rightArr, ...rootArr];
    return rootArr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
          return;
        } else currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
          return;
        } else currentNode = currentNode.right;
      } else if (currentNode.value === value) return;
    }
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > value) currentNode = currentNode.left;
      else if (currentNode.value < value) currentNode = currentNode.right;
      else if (currentNode.value === value) return true;
    }
    return false;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };