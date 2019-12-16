const { LinkedList, Node } = require('../ll-insertions/ll-insertions.js');

describe('LinkedList Class', () => {
  const linkedList = new LinkedList();
  const node = new Node();
  it ('successfully instantiates an empty linked list', () => {
    expect(linkedList.head).toBeNull;
  });
  it ('adds a node to the beginning of a linked list', () => {
      linkedList.insert(1);
      expect(linkedList.head).toEqual({ 'value': 1, 'next': null })
  })
  it('successfully adds a node to the end of the linked list', () => {
    linkedList.append(10);
    expect(linkedList.includes(10)).toBeTruthy;
  });
  it('successfully adds multiple nodes to the end of a linked list', () => {
    linkedList.append(11);
    linkedList.append(12);
    expect(linkedList.toString()).toEqual('1 -> 10 -> 11 -> 12');
  });
  it('successfully inserts a node before a node located in the middle of a linked list', () => {
    linkedList.insertBefore(9, 10);
    expect(linkedList.toString()).toEqual('1 -> 9 -> 10 -> 11 -> 12');
  });
  it('successfully inserts a node at the end of a linked list', () => {
    linkedList.insertAfter(13, 12);
    expect(linkedList.toString()).toEqual('1 -> 9 -> 10 -> 11 -> 12 -> 13');
  });
});