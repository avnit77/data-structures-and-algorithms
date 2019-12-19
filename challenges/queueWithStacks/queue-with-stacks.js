class Node {
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    this.top = new Node(value, this.top);
  }
  pop() {
    if(!this.top) return null;

    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }
  peek() {
    if(!this.top) return null;
    return this.top.value;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){

    while(this.stack1.top){
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while(this.stack2.top){
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue(){
    return this.stack1.pop();
  }

  toString(){
    let str = '';
    let currentNode = this.stack1.top;
    while(currentNode){
      str += `${currentNode.value.toString()} -> `;
      currentNode = currentNode.next;
    }
    return `${str}`;
  }
}

module.exports = { PseudoQueue };
