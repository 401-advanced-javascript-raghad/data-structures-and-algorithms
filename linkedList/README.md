# Singly Linked List
Creates classes for a linked-list and nodes in the list. Uses ES6 class syntax.
As a singly linked-list, each node has a reference to the next node in the list.

## Challenge
As a singly linked-list, each node has a reference to the next node in the list.
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

## Approach & Efficiency
## Big O
Time : O(1)
Space : O(n)

## API
- A method called insert which takes any value as an argument and adds a new node with that value to the head of the list.
- A method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- A method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"