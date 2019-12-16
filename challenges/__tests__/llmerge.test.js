const { mergeLists } = require('../llMerge/llmerge.js');
const { LinkedList } = require('../linkedList/linkedList.js');
describe('it zipper merges two linked lists', () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  list1.insert(5);
  list2.insert(6);
  list1.insert(3);
  list2.insert(4);
  list1.insert(1);
  list2.insert(2);
  mergeLists(list1, list2);
  it('merges two lists', () => {
    expect(list1.toString()).toEqual('1 -> 2 -> 3 -> 4 -> 5 -> 6');
  });
})
;
