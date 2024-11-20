// T: O(V + E)
// S: O(V + E)

function disconnectedUndirectedDfs(adj, V) {
  // boolean array to keep track of all the vertices that
  // have been visited
  let visited = new Array(adj.length).fill(false);

  // array to store the result
  let result = [];

  // visit every vertex if they have not been visited
  for (let i = 0; i < V; i++) {
    if (!visited[i]) traverse(i);
  }

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
function addEdge(adj, node1, node2) {
  adj[node1].push(node2);
}

// number of vertices
const V = 6;

// adjacency list for the vertices, we're initializing each array
// as an empty array
let adj = Array.from({ length: V }, () => []);

// edges of the graph
const edges = [
  [1, 2],
  [2, 0],
  [0, 3],
  [4, 5],
];

// adding all the edges
for (let e of edges) {
  addEdge(adj, e[0], e[1]);
}

console.log(disconnectedUndirectedDfs(adj, V)); // [ 0, 3, 1, 2, 4, 5 ]
