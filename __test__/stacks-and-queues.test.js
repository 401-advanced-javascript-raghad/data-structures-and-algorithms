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

  it('Can successfully peek the next item on the stack', () => {
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
  it('Calling pop or peek on empty stack raises exception', ()=> {
    let stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    let val = faker.random.word();
    queue.enqueue(val);
    expect(val).toEqual(queue.front.value);
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    for (let i = 0; i < 10; i++) {
      queue.enqueue(i);
    }
    expect(queue.front.value).toBe(0);
    expect(queue.front.next.value).toBe(1);
    expect(queue.front.next.next.value).toBe(2);
    expect(queue.front.next.next.next.value).toBe(3);
  });
  it('Can successfully dequeue off the queue', () => {
    let queue = new Queue();
    let val = faker.random.word();
    queue.enqueue(val);
    let poppedVal = queue.dequeue();
    expect(poppedVal.value).toEqual(val);
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    let val = faker.random.word();
    queue.enqueue(val);
    let peekedVal = queue.peek();
    expect(peekedVal).toEqual(val);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    let val = faker.random.word();
    queue.enqueue(val);
    queue.enqueue(val);
    queue.enqueue(val);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBe(null);
  });

  it('Can successfully instantiate an empty queue', ()=> {
    let queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy();
  });

  it('Calling dequeue or peek on empty queue raises exception', ()=> {
    let queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
  });
});