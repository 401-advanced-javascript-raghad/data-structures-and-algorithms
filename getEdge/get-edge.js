'use strict';

const Graph = require('../graph/graph');


const getEdges = (graph, cityArr) => {
  let fullTrip = { possible: true, cost: 0 };

  for (let i = 0; i < cityArr.length - 1; i++) {
    let hasCurrent = graph.has(cityArr[i]);
    let current = graph.get(cityArr[i]);
    let neighbors = graph.getNeighbors(current);
    let hasNeighbor = false;
    let  neighbor;

    for (let neigh of neighbors) {
      if (neigh.vertex.value === cityArr[i + 1]) hasNeighbor = true;
      neighbor = neigh;
    }
    if (hasCurrent && hasNeighbor) fullTrip.cost += neighbor.weight;  
  }
  return fullTrip;
};


module.exports = getEdges;