const mergeLists = (list1, list2) => {
  let leadNode = list1.head;
  let followNode = list2.head;
  let otherNode;
  while(leadNode.next || followNode){
    if(!leadNode.next){
      leadNode.next = followNode;
      return list1.head;
    }
    otherNode = leadNode.next;
    leadNode.next = followNode;
    followNode = otherNode;
    leadNode = leadNode.next;
  }
  return list1.head;
};

module.exports = { mergeLists };

