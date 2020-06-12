class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
    
class Stack {
  constructor() {
    this.top = null;
    this.biggest = [0];
  }
    
    
  push(value) {
    let node = new Node(value);
    if (typeof value === 'number'){ 
      if(this.biggest[0] < value){
        this.biggest.unshift(value);
  
      }
      if (this.top) {
        node.next = this.top;
        this.top = node;
      } else {
        this.top = node;
      }
    }else {
      return 'the input should be NUMBER';
    }
       
  }
    
  pop() {
    if (this.top) {
      if (this.top.value === this.biggest[0]){
        this.biggest.shift();
      }
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
  getMax() {
    return this.biggest[0];
  }
        
}
    
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.getMax());
  
  
  