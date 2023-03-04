'use strict';

const { Node, Tree } = require('./index');

describe('Tree', () => {
  it('Should create a tree', () => {
    let tree = new Tree();
    tree.root = new Node(5);
    tree.root.left = new Node(1);
    tree.root.right = new Node(8);

    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.right).toBeNull();
  });
});

