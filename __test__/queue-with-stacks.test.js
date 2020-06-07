'use strict';

const PseudoQueue = require('../queueWithStacks/queue-with-stacks');
const faker = require('faker');

const queue = new PseudoQueue;
let value = faker.random.word();

describe('queue-with-stacks.js', () => {
  it('can enqueue a new value', () => {
    value = faker.random.word();
    queue.enqueue(value);
    expect(queue.stack1.peek()).toBe(value);
  });
  it('can enqueue multiple values', () => {
    let queue = new PseudoQueue();
    let values = [
      'string', 
      123, 
      true, 
      {key:'value'},
    ];
    queue.enqueue(values[3]);
    queue.enqueue(values[2]);
    queue.enqueue(values[1]);
    queue.enqueue(values[0]);
    expect(queue.stack1.top.value).toEqual(values[0]);
    expect(queue.stack1.top.next.value).toEqual(values[1]);
    expect(queue.stack1.top.next.next.value).toEqual(values[2]);
    expect(queue.stack1.top.next.next.next.value).toEqual(values[3]);
  });
  it('returns null if no value is passed in to enqueue', () => {
    let emptyQueue = new PseudoQueue();
    emptyQueue.enqueue();
    expect(emptyQueue.stack1.peek()).toBe(null);
  });

  it('can dequeue a value using FIFO', () => {
    let dequeued = queue.dequeue();
    expect(dequeued).toBe(value);
  });
  it('can dequeue multiple values', () => {
    let pQueue = new PseudoQueue();
    let values = [
      'string', 
      123, 
      true, 
      {key:'value'},
    ];
    pQueue.enqueue(values[0]);
    pQueue.enqueue(values[1]);
    pQueue.enqueue(values[2]);
    pQueue.enqueue(values[3]);
    let myVal = [
      pQueue.dequeue(),
      pQueue.dequeue(),
      pQueue.dequeue(),
      pQueue.dequeue(),
    ];
    expect(values[0]).toEqual(myVal[0]);
    expect(values[1]).toEqual(myVal[1]);
    expect(values[2]).toEqual(myVal[2]);
    expect(values[3]).toEqual(myVal[3]);
  });
  it('returns null if dequeued when empty', () => {
    let emptyQueue = new PseudoQueue();
    expect(emptyQueue.dequeue()).toBe(null);
  });

});