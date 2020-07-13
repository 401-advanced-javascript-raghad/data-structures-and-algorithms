class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjancyList = new Map();
  }

  has(value) {
    let vertices = this.adjacencyList.keys(),
      found = false;
    for (let vertex of vertices) {
      if (vertex.value === value) return found = true;
    }
    return found;
  }
  get(value) {
    let vertices = this.adjacencyList.keys(),
      found = null;
    for (let vertex of vertices) {
      if (vertex.value === value) return found = vertex;
    }
    return found;
  }
  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    this._size++;
    return vertex;
  }
 
  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this._adjancyList.has(startVertex) || 
              !this._adjancyList.has(endVertex)
    ) {
      console.log('Vertex Not Found!!!');
    } else {
      const adjacencies = this._adjancyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  addUndirectedEdge(startVertex, endVertex, weight) {
    this.addDirectedEdge(startVertex, endVertex, weight);
    this.addDirectedEdge(endVertex, startVertex, weight);
  }

  getNeighbors(vertex) {
    if (this._adjancyList.has(vertex)) {
      return this._adjancyList.get(vertex);
    } else {
      console.log('vertex does not exist!!');
    }
  }

  getVertices() {
    return this._size ? [...this.adjacencyList.keys()] : null;
  }

  printAll() {
    for (const [vertex, edge] of this._adjancyList.entries()) {
      console.log('Vertex ===> ', vertex);
      console.log('Edge ===>' , edge);
    }
  }


  bfs(startNode) {
    const queue = [];
    const vistedNodes = new Set();

    queue.push(startNode);
    vistedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);
            
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if(vistedNodes.has(neighborNode)) {
          continue;
        } else {
          vistedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }

    }

    console.log({vistedNodes});
        
    return vistedNodes;
  }
}

module.exports = Graph;
