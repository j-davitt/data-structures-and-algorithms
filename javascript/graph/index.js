'use strict';

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
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    // check if the vertex exists
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      console.log('No vertex');
    } else {
      // add the edge to the adjacencies list
      const adjacencies = this.adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  getNeighbors(vertex) {
    if (this.adjacencyList.has(vertex)) {
      return [...this.adjacencyList.get(vertex)];
    } else {
      return null;
    }
  }

  getNodes() {
    return this.adjacencyList.keys();
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(startNode, callback) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);
    let currentNode = null;

    while (queue.length) {
      currentNode = queue.shift();

      if (callback) callback(currentNode);

      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return visitedNodes;
  }

  depthFirst(startNode, callback) {
    const stack = [];
    const visitedNodes = new Set();

    stack.push(startNode);
    visitedNodes.add(startNode);
    let currentNode = null;

    while (stack.length) {
      currentNode = stack.pop();

      if (callback) callback(currentNode);

      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        stack.push(neighborNode);
      }
    }
    return visitedNodes;
  }
}

const businessTrip = (graph, cities) => {
  let cost = 0;
  let currentCity = null;
  let nextCity = null;
  let connection = false;
  while (cities.length) {
    currentCity = cities.shift();
    if (!cities.length) {
      return cost;
    } else {
      nextCity = cities[0];
      const neighbors = graph.getNeighbors(currentCity);
      for (let neighbor of neighbors) {
        if (neighbor.vertex === nextCity) {
          cost += neighbor.weight;
          connection = true;
        }
      }
      if (!connection) return null;
      connection = false;
    }
  }
  return cost;
};

const isConnected = (graph, nodeA, nodeB) => {
  const stack = [];
  const visitedNodes = new Set();

  stack.push(nodeA);
  visitedNodes.add(nodeA);
  let currentNode = null;

  while (stack.length) {
    currentNode = stack.pop();

    if (currentNode === nodeB) return true;

    const neighbors = this.getNeighbors(currentNode);
    for (let neighbor of neighbors) {
      const neighborNode = neighbor.vertex;
      if (visitedNodes.has(neighborNode)) {
        continue;
      } else {
        visitedNodes.add(neighborNode);
      }
      stack.push(neighborNode);
    }
  }
  return false;
};

module.exports = { Graph, Vertex, Edge, businessTrip };
