'use strict';

// depth first goes down first then picks up the right

// breadth first goes layer by layer downward

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// keep this for later challenge
class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k).fill(null);
  }
}
//keep for later
class KaryTree {
  constructor() {
    this.root = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // log before order
  preOrder() {
    const arr = [];

    const traverse = (node) => {
      arr.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return arr;
  }

  // log in between order
  inOrder() {
    const arr = [];

    const traverse = (node) => {

      if (node.left) {
        traverse(node.left);
      }

      arr.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return arr;
  }

  // log after order
  postOrder() {
    const arr = [];

    const traverse = (node) => {

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      arr.push(node.value);
    };

    traverse(this.root);
    return arr;
  }

  getMax(){
    let temp = this.root.value;

    const traverse = (node) => {

      if (node.left) {
        if(node.left.value > temp){
          temp = node.left.value;
        }
        traverse(node.left);
      }

      if (node.right) {
        if(node.right.value > temp){
          temp = node.right.value;
        }
        traverse(node.right);
      }
    };
    traverse(this.root);
    return temp;
  }

}

class BinaryTree extends Tree {
  super() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let temp = false;

    while (current && !temp) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else if (value === current.value) {
        temp = true;
      }
    }
    return temp;
  }
}


module.exports = { Node, Tree, BinaryTree };
