'use strict';

const { Tree, Node } = require('../trees');
const { tree_intersection } = require('./tree-intersection');

let tree = new Tree();
tree.root = new Node('5');
tree.root.left = new Node('1');
tree.root.right = new Node('8');

let tree2 = new Tree();
tree2.root = new Node('7');
tree2.root.left = new Node('6');
tree2.root.right = new Node('8');

let tree3 = new Tree();
tree3.root = new Node('7');
tree3.root.left = new Node('6');
tree3.root.right = new Node('8');
tree3.root.left.left = new Node('10');
tree3.root.left.right = new Node('1');

let tree4 = new Tree();
tree4.root = new Node('7');
tree4.root.left = new Node('6');
tree4.root.right = new Node('2');


describe('tree-intersection', () => {
  it('Should find common values', () => {
    let test = tree_intersection(tree,tree2);

    expect(test).toEqual(['8']);

  });
  it('Should find common values', () => {
    let test = tree_intersection(tree,tree3);

    expect(test).toEqual(['1', '8']);

  });
  it('Should return empty array', () => {
    let test = tree_intersection(tree,tree4);

    expect(test).toEqual([]);

  });
});
