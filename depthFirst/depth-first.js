
const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;
const Graph = require('../graph/graph');

function depth_first (node) {
  let s = new Stack(this.nodes.length);
  let explored = new Set();
  s.push(node);
 
  explored.add(node);
 
  while (!s.isEmpty()) {
    let t = s.pop();
    console.log(t);
    this.edges[t]
      .filter(n => !explored.has(n))
      .forEach(n => {
        explored.add(n);
        s.push(n);
      });
  }
}

module.exports = depth_first;