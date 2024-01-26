// implementing bfs in graph


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

    bfs(startVertex) {
        const visited = {};
        const queue = [startVertex];
        visited[startVertex] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            this.adjacencyList[currentVertex].forEach(item => {
                if (!visited[item]) {
                    visited[item] = true;
                    queue.push(item);
                }
            });
        }
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
console.log('BFS traversal: ')
graph.bfs('A')