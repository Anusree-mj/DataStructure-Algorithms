// implementing gfs in graph


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

    dfs(startVertex) {
        const visited = {};
        this.dfsHelper(startVertex, visited);
    }

    dfsHelper(vertex, visited) {
        if (!vertex) return;

        console.log(vertex);
        visited[vertex] = true;

        this.adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                this.dfsHelper(neighbor, visited);
            }
        });
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
console.log('DFS traversal: ')
graph.dfs('A')