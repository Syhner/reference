const Queue = require('./Queue');
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
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return undefined;

    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
    return undefined;
  }
  contains(value) {
    if (this.root === null) return false;

    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  // Breadth First Search
  BFS() {
    let node = this.root;
    const data = [];
    const queue = new Queue();
    queue.enqueue(node);

    while (queue.length) {
      node = queue.dequeue();
      data.push(node.value);
      node.left && queue.enqueue(node.left);
      node.right && queue.enqueue(node.right);
    }

    return data;
  }
  // Depth First Search
  DFS() {
    const data = [];

    const traverse = node => {
      order === 'pre' && data.push(node.value);
      node.left && traverse(node.left);
      order === 'in' && data.push(node.value);
      node.right && traverse(node.right);
      order === 'post' && data.push(node.value);
    };

    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
