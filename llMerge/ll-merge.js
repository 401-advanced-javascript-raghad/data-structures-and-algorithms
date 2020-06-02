'use strict';

const LinkedList = require('../linkedList/linked-list');

const mergeLists = (list1, list2) => {
  let mergedList = new LinkedList();
  let l1 = list1.head;
  let l2 = list2.head;
  while (l1 || l2) {
    if (l1) {
      mergedList.append(l1.value);
      l1 = l1.next;
    }
    if (l2) {
      mergedList.append(l2.value);
      l2 = l2.next;
    }
  }
  return mergedList.head;
};

module.exports =  mergeLists;