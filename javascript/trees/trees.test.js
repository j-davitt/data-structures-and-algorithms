'use strict';

const { Node, Tree, BinaryTree } = require('./index');

describe('Tree', () => {
  it('Should create a tree', () => {
    let tree = new Tree();
    tree.root = new Node(5);
    tree.root.left = new Node(1);
    tree.root.right = new Node(8);

    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.right).toBeNull();
  });
  it('Should return max value', () => {
    let tree = new Tree();
    tree.root = new Node(5);
    tree.root.left = new Node(1);
    tree.root.right = new Node(8);

    expect(tree.getMax()).toEqual(8);
  });
  it('adds to binary search tree', () => {
    let bTree = new BinaryTree();
    bTree.add(8);
    bTree.add(3);
    bTree.add(5);
    bTree.add(10);

    expect(bTree.root.value).toEqual(8);
    expect(bTree.root.left.value).toEqual(3);
    expect(bTree.root.left.right.value).toEqual(5);
    expect(bTree.root.right.value).toEqual(10);
  });
});

