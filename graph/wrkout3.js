// removing a vertex and edge

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, "->", [...this.adjacencyList[vertex]])
        }
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }

        for (let adjacenVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacenVertex);
        }

        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("D", "C");

graph.display();

console.log("After removing edge")
graph.removeEdge("A","B");
graph.display();

console.log("After removing vertex");
graph.removeVertex("B");
graph.display();
