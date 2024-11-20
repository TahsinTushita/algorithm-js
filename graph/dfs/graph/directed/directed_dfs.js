// T: O(V + E)
// S: O(V + E)

function directedDfs(adj, s) {
  // boolean array to keep track of all the vertices that
  // have been visited
  let visited = new Array(adj.length).fill(false);

  // array to store the result
  let result = [];

  traverse(s);

  // function to traverse the graph
  function traverse(node) {
    // mark the vertex as visited
    visited[node] = true;

    // push the vertex inside the result array
    result.push(node);

    // traverse the vertices in its adjacency list recursively
    for (let v of adj[node]) {
      if (!visited[v]) traverse(v);
    }
  }

  return result;
}

// function to add edges between vertices
function addEdge(adj, u, v) {
  adj[u].push(v);
}

// number of vertices
const V = 5;

// adjacency list for the vertices, we're initializing each array
// as an empty array
let adj = Array.from({ length: V }, () => []);

// edges of the graph
const edges = [
  [1, 2],
  [1, 0],
  [2, 0],
  [2, 3],
  [2, 4],
];

// adding all the edges
for (let e of edges) {
  addEdge(adj, e[0], e[1]);
}

// the starting vertex
const source = 1;

console.log(directedDfs(adj, source)); // [ 1, 2, 0, 3, 4 ]
