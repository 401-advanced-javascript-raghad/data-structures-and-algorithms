'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    if (value) {
      this.stack1.push(value);
      return this.stack1.top;
    } else {
      return null;
    }
  }
  dequeue() {
    if (this.stack1.peek()) {
      while (this.stack1.top.next) {
        let variable = this.stack1.pop();
        this.stack2.push(variable);
      }
      const dequeued = this.stack1.pop();
      while (this.stack2.peek()) {
        let variable = this.stack2.pop();
        this.stack1.push(variable);
      }
      return dequeued;
    } else {
      return null;
    }
  }
}
module.exports = PseudoQueue;