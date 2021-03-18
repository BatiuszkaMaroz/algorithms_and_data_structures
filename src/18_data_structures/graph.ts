export {};

class Graph {
  adjacencyList: { [x: string]: any[] } = {};

  addVertex(v1: string) {
    if (!this.adjacencyList[v1]) {
      this.adjacencyList[v1] = [];
    }
  }

  addEdge(v1: string, v2: string) {
    if (
      !this.adjacencyList[v1] ||
      !this.adjacencyList[v2] ||
      (this.adjacencyList[v1].includes(v2) &&
        this.adjacencyList[v2].includes(v1))
    ) {
      return;
    }

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1: string, v2: string) {
    if (this.adjacencyList[v1]) {
      const idx = this.adjacencyList[v1].findIndex((e) => e === v2);
      idx !== -1 && this.adjacencyList[v1].splice(idx, 1);
    }

    if (this.adjacencyList[v2]) {
      const idx = this.adjacencyList[v2].findIndex((e) => e === v1);
      idx !== -1 && this.adjacencyList[v2].splice(idx, 1);
    }
  }

  removeVertex(v1: string) {
    this.adjacencyList[v1]?.forEach((v2) => {
      const idx = this.adjacencyList[v2]?.findIndex((e) => e === v1);
      idx !== -1 && this.adjacencyList[v2]?.splice(idx, 1);
    });

    delete this.adjacencyList[v1];
  }

  traversal(v1: string) {
    const res: string[] = [];
    const visited: { [x: string]: boolean } = {};

    // * DepthFirstSearch - Recursive

    // const dfs = (v2: string) => {
    //   if (!this.adjacencyList[v2]) return;

    //   res.push(v2);
    //   visited[v2] = true;

    //   this.adjacencyList[v2].forEach((v3) => {
    //     if (!visited[v3]) {
    //       dfs(v3);
    //     }
    //   });
    // };

    // dfs(v1);

    // * DepthFirstSearch - Iterative

    // const stack = [];

    // stack.push(v1);
    // visited[v1] = true;

    // while (stack.length) {
    //   const v2 = stack.pop()!;
    //   res.push(v2);

    //   this.adjacencyList[v2]?.forEach((v3) => {
    //     if (!visited[v3]) {
    //       stack.push(v3);
    //       visited[v3] = true;
    //     }
    //   });
    // }

    // * BreadthFirstSearch

    const queue: string[] = [];
    queue.push(v1);
    visited[v1] = true;

    while (queue.length) {
      const v2 = queue.shift()!;
      res.push(v2);

      this.adjacencyList[v2]?.forEach((v3) => {
        if (!visited[v3]) {
          queue.push(v3);
          visited[v3] = true;
        }
      });
    }

    return res;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.traversal('D'));

// *         A
// *       /   \
// *      B     C
// *      |     |
// *      D --- E
// *       \   /
// *         F
