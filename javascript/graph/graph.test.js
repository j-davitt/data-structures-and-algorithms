const { Graph, Edge, Vertex } = require('./index');


describe('Graph', () => {

  it('should add a node to the graph', () => {
    const graph = new Graph();
    const test = graph.addVertex(10);
    expect(test.value).toEqual(10);
    expect(graph.size()).toBe(1);
  });

  it('should add an edge between two nodes', () => {
    const graph = new Graph();
    const ten = graph.addVertex(10);
    const two = graph.addVertex(2);
    graph.addDirectedEdge(ten, two);
    expect(graph.adjacencyList.get(ten)[0].vertex.value).toEqual(2);
  });


});

