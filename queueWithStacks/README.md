# Stacks and Queues
We have to know how to deal with stack and queue and what is the structure of it.
## Challenge
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:
- enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
- dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency
## Efficiency
### Big O :
- Space : O(1), Because I returned one variable,
- Time : O(n), Because I used loops.

## Solution
- [whiteboard](../assets/queue-with-stacks.jpg)