'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (this.top) {
      node.next = this.top;
      this.top = node;
    } else {
      this.top = node;
    }
  }

  pop() {
    if (this.top) {
      let poppedVar = this.top.value;
      this.top = this.top.next;
      return poppedVar;
    } else {
      return null;
    }
  }

  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }
  isEmpty(){
    if (this.top) {
      return 'false';
    } else {
      return 'true';
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.front) {
      this.back.next = node;
      this.back = node;
    } else {
      this.front = node;
      this.back = node;
    }
  }

  dequeue() {
    if (this.front) {
      let dequeued = this.front;
      this.front = this.front.next;
      return dequeued;
    } else {
      return null;
    }
  }

  peek() {
    if (this.front) {
      return this.front.value;
    }
  }
  isEmpty(){
    if (this.front) {
      return 'false';
    } else {
      return 'true';
    }
  }
}

module.exports = { Node, Stack, Queue };