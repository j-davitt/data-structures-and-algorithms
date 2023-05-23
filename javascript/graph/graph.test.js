const { Graph, Edge, Vertex, businessTrip } = require('./index');


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

  it('should display the business trip cost', () => {
    const graph = new Graph();
    const pandora = graph.addVertex('Pandora');
    const arendelle = graph.addVertex('Arendelle');
    const metroville = graph.addVertex('Metroville');
    const monstroplolis = graph.addVertex('Monstroplolis');
    const naboo = graph.addVertex('Naboo');
    const narnia = graph.addVertex('Narnia');
    graph.addDirectedEdge(pandora, arendelle, 150);
    graph.addDirectedEdge(pandora, metroville, 82);
    graph.addDirectedEdge(arendelle, metroville, 99);
    graph.addDirectedEdge(arendelle, monstroplolis, 42);
    graph.addDirectedEdge(metroville, monstroplolis, 105);
    graph.addDirectedEdge(metroville, naboo, 26);
    graph.addDirectedEdge(metroville, narnia, 37);
    graph.addDirectedEdge(monstroplolis, naboo, 73);
    graph.addDirectedEdge(naboo, narnia, 250);
    const cities = [pandora, arendelle, monstroplolis, naboo];
    const result = businessTrip(graph, cities);
    expect(result).toEqual(265);
  });



});

