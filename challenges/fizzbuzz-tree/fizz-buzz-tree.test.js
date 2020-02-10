const BinaryTree = require('../tree/tree.js');
const fizzBuzzTree = require('./fizz-buzz-tree.js');

describe('fizzBuzzTree challenge', () => {
  let tree;
  beforeEach(() => {
    tree = new BinaryTree();
  });
  it('converts a tree with 1,3,5,15 to "1", "Fizz", "Buzz", "Fizzbuzz"', () => {
    tree.add(1);
    tree.add(3);
    tree.add(5);
    tree.add(15);
    fizzBuzzTree(tree);
    expect(tree.inOrder(tree.root)).toEqual(['1', 'Fizz', 'Buzz', 'FizzBuzz']);
  });
});
