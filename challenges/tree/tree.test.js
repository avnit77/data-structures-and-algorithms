const BinaryTree = require('./tree.js');

describe('BinaryTree class', () => {
  let tree;
  beforeEach(() => {
    tree = new BinaryTree();
  });
  it('successfully instantiates an empty binary tree', () => {
    expect(tree.root).toBeNull();
  });
  it('properly inserts a value into the tree', () => {
    tree.add(10);
    expect(tree.root).toEqual({ 'left': null, 'right': null, 'data': 10 });
  });
  it('records elements to inorder array in correct order', () => {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.inOrder(tree.root)).toEqual([5, 10, 15]);
  });
  it('records elements to preorder array in correct order', () => {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    expect(tree.preOrder(tree.root)).toEqual([10, 5, 15]);
  });
  it('records elements to postorder array in correct order', () => {
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(20);
    tree.add(3);
    expect(tree.postOrder(tree.root)).toEqual([20, 15, 10, 5, 3]);
  });
  it('returns true if a value is contained in the tree', () => {
    tree.add(10);
    expect(tree.contains(10)).toEqual(true);
  });
  it('returns false if a value is not contained in the tree', () => {
    tree.add(10);
    expect(tree.contains(5)).toEqual(false);
  });
  it('returns array of elements in correct order for breadth first traversal', () => {
    tree.add(1);
    tree.add(3);
    tree.add(2);
    tree.add(4);
    expect(tree.breadth()).toEqual([1, 3, 2, 4]);
  });
});
