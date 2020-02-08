class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }

  inOrder(node){
    let array = [];
    if(node){
      array = array.concat(this.inOrder(node.left));
      array.push(node.data);
      array = array.concat(this.inOrder(node.right));
    }
    return array;
  }

  preOrder(node){
    let array = [];
    if(node != null){
      array.push(node.data);
      array = array.concat(this.inOrder(node.left));
      array = array.concat(this.inOrder(node.right));
    }
    return array;
  }

  postOrder(node){
    let array = [];
    if(node !== null){

      array = array.concat(this.postOrder(node.right));
      array.push(node.data);
      array = array.concat(this.postOrder(node.left));
    }
    return array;
  }

  breadth(){
    let tree = [this.root];
    let array = [];
    while(tree.length > 0){
      let node = tree.shift();
      array.push(node.data);
      if(!node.left && !node.right) {
        continue;
      }
      if(node.left) {
        tree.push(node.left);
      }
      if(node.right){
        tree.push(node.right);
      }
    }
    return array;
  }


  contains(data){
    const array = this.inOrder(this.root);
    if(array.includes(data)){
      return true;
    }
    else return false;
  }

  add(data){
    var newNode = new Node(data);
    if(this.root === null){
      this.root = newNode;
    } else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode)
  {
    if(newNode.data < node.data)
    { if(node.left === null){
      node.left = newNode;
    } else this.insertNode(node.left, newNode);
    } else { if(node.right === null){
      node.right = newNode;
    } else this.insertNode(node.right, newNode);
    }
  }
}

module.exports = BinaryTree;
