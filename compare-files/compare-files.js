class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  
let firstTree = new Node('folder');
firstTree.left = new Node('folder');
firstTree.right = new Node('folder');
firstTree.left.left = new Node('.js');
firstTree.left.right = new Node('folder');
firstTree.left.right.left = new Node('.py');
firstTree.left.right.right = new Node('.py');
firstTree.right.right = new Node('folder');
  
let secTree = new Node('folder');
secTree.left = new Node('folder');
secTree.left.left = new Node('folder');
secTree.left.left.left = new Node('.cs');
secTree.left.left.right = new Node('.cs');
secTree.right = new Node('folder');
secTree.right.right = new Node('folder');
secTree.right.right.left = new Node('.sql');
secTree.right.right.right = new Node('folder');
  
let thirdTree = new Node('folder');
thirdTree.left = new Node('folder');
thirdTree.left.left = new Node('folder');
thirdTree.left.left.right = new Node('.cs');
thirdTree.right = new Node('folder');
thirdTree.right.left = new Node('.sql');
  
const compareTreeFunc = (root1, root2) => {
  console.log(countFiles(root1) === countFiles(root2));
};
  
const countFiles = (root) => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  
  return countFiles(root.right) + countFiles(root.left);
};
  
compareTreeFunc(firstTree, secTree);
compareTreeFunc(firstTree, thirdTree);
compareTreeFunc(secTree, firstTree);
compareTreeFunc(secTree, thirdTree);