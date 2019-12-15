class Node {
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
    }
    append(value) {
        let node = new Node(value);

        if(this.head === null){
            this.head = node;
        } else if(this.next === null){
            this.next = node;
        }
    }
}

module.exports = { Node, LinkedList };