class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;

    while (true) {
      if (value === curr.value) return undefined;

      if (value < curr.value) {
        if (curr.left === null) {
          curr.left = newNode;
        } else {
          curr = curr.left;
        }
      } else {
        if (curr.right === null) {
          curr.right = newNode;
        } else {
          curr = curr.right;
        }
      }
    }
  }

  // current node -> left node -> right node
  preorderDfs() {
    let result = [];

    function traverse(node) {
      result.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return result;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.preorderDfs()); // [ 10, 6, 3, 8, 15, 20 ]
