const { LinkedList } = require('../linkedList/linkedList.js');

describe('LinkedList Class', () => {
  const linkedList = new LinkedList();
  it ('successfully instantiates an empty linked list', () => {
    expect(linkedList.head).toBeNull;
  });
  it ('returns correct node value that is kth from end', () => {
    linkedList.insert(4);
    linkedList.insert(5);
    linkedList.insert(6);
    expect (linkedList.kthFromEnd(1)).toEqual(5);
    expect (linkedList.kthFromEnd(4)).toEqual('exception');
    expect (linkedList.kthFromEnd(-2)).toEqual('exception');
  });
});
