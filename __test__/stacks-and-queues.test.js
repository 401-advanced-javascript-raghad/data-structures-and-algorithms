'use strict';

const faker = require('faker');
const Node = require('../stacksAndQueues/stacks-and-queues').Node;
const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;
const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;


describe('stacks-and-queues.js', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    let val = faker.random.word();
    stack.push(val);
    expect(val).toEqual(stack.top.value);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    for (let i = 0; i < 10; i++) {
      stack.push(i);
    }
    expect(stack.top.value).toBe(9);
    expect(stack.top.next.value).toBe(8);
    expect(stack.top.next.next.value).toBe(7);
    expect(stack.top.next.next.next.value).toBe(6);
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    let val = faker.random.word();
    stack.push(val);
    stack.push(val);
    let poppedVal = stack.pop();
    expect(poppedVal).toEqual(val);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    let val = faker.random.word();
    stack.push(val);
    stack.push(val);
    stack.push(val);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(null);
  });

  // Can successfully peek the next item on the stack.
  it('CCan successfully peek the next item on the stack', () => {
    let stack = new Stack();
    let val = faker.random.word();
    stack.push(faker.random.word());
    stack.push(val);
    let peekedVal = stack.peek();
    expect(peekedVal).toEqual(val);
  });
  it('Can successfully instantiate an empty stack', ()=> {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });
  // Calling pop or peek on empty stack raises exception
  // Can successfully enqueue into a queue
  // Can successfully enqueue multiple values into a queue
  // Can successfully dequeue out of a queue the expected value
  // Can successfully peek into a queue, seeing the expected value
  // Can successfully empty a queue after multiple dequeues
  // Can successfully instantiate an empty queue
  // Calling dequeue or peek on empty queue raises exception

});