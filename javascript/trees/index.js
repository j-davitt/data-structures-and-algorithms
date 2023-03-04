'use strict';

// depth first goes down first then picks up the right

// breadth first goes layer by layer downward

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// keep this for later challenge
class KaryNode {
  constructor(value, k){
    this.value = value;
    this.children = new Array(k).fill(null);
  }
}
//keep for later
class KaryTree {
  constructor(){
    this.root = null;
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  // log before order
  preOrder(){
    const arr = [];

    const traverse = (node) => {
      arr.push(node.value);

      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    };

    traverse(this.root);
    return arr;
  }

  // log in between order
  inOrder(){
    const arr = [];

    const traverse = (node) => {

      if(node.left){
        traverse(node.left);
      }

      arr.push(node.value);

      if(node.right){
        traverse(node.right);
      }
    };

    traverse(this.root);
    return arr;
  }

  // log after order
  postOrder(){
    const arr = [];

    const traverse = (node) => {

      if(node.left){
        traverse(node.left);
      }

      if(node.right){
        traverse(node.right);
      }

      arr.push(node.value);
    };

    traverse(this.root);
    return arr;
  }

}

class BinaryTree extends Tree {

}



module.exports = { Node, Tree };
