const fizzBuzz = (root) => {
  if(root !== null){
    if(root.data % 3 === 0 && root.data % 5 === 0){
      root.data = 'FizzBuzz';
    }
    else if(root.data % 3 === 0){
      root.data = 'Fizz';
    }
    else if(root.data % 5 === 0){
      root.data = 'Buzz';
    }
    else root.data = (root.data).toString();
    fizzBuzz(root.right);
    fizzBuzz(root.left);
  }
};

const fizzBuzzTree = (tree) => {
  fizzBuzz(tree.root);
};

module.exports = fizzBuzzTree;
