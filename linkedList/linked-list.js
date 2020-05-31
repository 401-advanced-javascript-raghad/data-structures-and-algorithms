'use strict';
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this.head;
  }
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
  toString() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  } 
  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this.head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    } 
    current.next = node;
    return this.head;
  }
  insertBefore(value, newVal) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this.head;
    }

    let current = this.head;
    newVal;
    current.next.value;
    current.next.next.value;
    while (current.next.value !== newVal && current.next) {
      current.next.value;
      current = current.next;
    }
    if (current.next) { 
      node.next = current.next;
      current.next = node;
    } else {
      current.next = node;
    }
    return this.head;
  }

  insertAfter(value, newVal) {
    let node = new Node(value);

    if (!this.head) { 
      this.head = node; 
      return this.head; 
    }

    let current = this.head;
    while (current.value !== newVal || current.next) {
      current = current.next;
    }
    if (current.next) {
      node.next = current.next;
    }
    current.next = node;
    return this.head;
  }
} 
module.exports = LinkedList;
