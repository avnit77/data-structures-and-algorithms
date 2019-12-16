class Node {
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insert(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length ++;
      }

    includes(value){
        let currentNode = this.head;
        while(currentNode){
          if(currentNode.value === value){
            return true;
          }
          currentNode = currentNode.next;
        }
        return false;
      }

      toString(){
        let str = '';
        let currentNode = this.head;
        str += currentNode.value;
        while(currentNode.next !== null){
          currentNode = currentNode.next;
          str += ` -> ${currentNode.value.toString()}`;
        }
        return str;
      }

    append(value) {
        let node = new Node(value);
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = node;
        this.length ++;
    }
    insertBefore(newValue, value) {
        let node = new Node(newValue);
        this.length ++;
        let current = this.head;
        let previous;
        while(current.value !== value) {
            previous = current;
            current = current.next
        }
        node.next = current;
        previous.next = node;
    }
    insertAfter(newValue, value) {
        let node = new Node(newValue);
        let current = this.head;
        this.length ++

        while(current.value != value){
            current = current.next;
        }
        current.next = node;
    }
}

module.exports = { Node, LinkedList };