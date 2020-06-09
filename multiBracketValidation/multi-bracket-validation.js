class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    let newNode = new Node(val);
    newNode.next = this.top;

    this.top = newNode;
  }

  pop() {
    if (!this.top) return null;

    let temp = this.top;
    this.top = temp.next;
    temp.next = null;

    return temp.val;
  }

  toString() {
    let strVar = '';
    let currentNode = this.top;

    while (currentNode) {
      strVar += currentNode.val + '\n';
      currentNode = currentNode.next;
    }

    strVar += 'null';
    return strVar;
  }
}

const multiBracketValidation = (str) => {
  let bracket = str.split('');
  let bracketStack = new Stack();

  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === '{' || bracket[i] === '[' || bracket[i] === '(') {
      bracketStack.push(bracket[i]);
    } else if (bracket[i] === '}' || bracket[i] === ']' || bracket[i] === ')') {
      let poppedVal = bracketStack.pop();

      if (bracket[i] === '}' && poppedVal != '{') return false;
      if (bracket[i] === ']' && poppedVal != '[') return false;
      if (bracket[i] === ')' && poppedVal != '(') return false;
    }
  }

  if (bracketStack.top) return false;
  return true;
};

module.exports = multiBracketValidation;