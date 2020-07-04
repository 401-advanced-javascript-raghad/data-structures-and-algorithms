'use strict';

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head=null){
    this.head = head;
  }

  add(value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
}
class HashTable {
  constructor(size){
    this.map = new Array(size);
  }
  hash(key){
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }
  add(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    let entry = {[key]: value};
    this.map[hash].add(entry);
  }
  get(key) {
    let hash = this.hash(key);

    if (this.map[hash]) {
      let current = this.map[hash];

      while (current) {
        if (current.key === key) return current.val;
        current = current.next;
      }
    }
    return null;
  }

  contains(key){
    let val = this.get(key);
    if (!val) return false;
    else return true;
  }
}

module.exports = HashTable;
