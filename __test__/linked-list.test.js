'use strict';

const LinkedList = require('../linkedList/linked-list');
const faker = require('faker');

let list = new LinkedList();
let length = faker.random.number();
let values = [];
for (let i = 0; i < length; i++) {
  values.push(faker.random.word());
}

for (let i = 0; i < values.length; i++) {
  list.insert(values[i]);
}

values.reverse();

describe('linked lists', () => {
  it('Can successfully instantiate an empty linked list', () => {
    expect(new LinkedList()).toBeTruthy();
    expect(new LinkedList().head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    let newValue = faker.random.word();
    list.insert(newValue);
    values.unshift(newValue);
    expect(list.head.value).toBe(values[0]);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    expect(list.head).toBeTruthy();
    expect(list.head.next).not.toBeNull();
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let current = list.head;
    for (let i = 0; i < values.length; i++) {
      expect(current.value).toBe(values[i]); 
      current = current.next;
    }
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let randomValue = values[faker.random.number(values.length - 1)];
    expect(list.includes(randomValue)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let randomValue = faker.random.number();
    expect(list.includes(randomValue)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(list.toString()).toEqual(values);
  });
});
