// T: O(V + E)
// S: O(V)

// Topological sort using DFS
function topSort(adj, V) {
  // boolean array to keep track of all the vertices that
  // have been visited
  let visited = new Array(V).fill(false);

  // stack to store the nodes so that we can pop them in
  // reverse order
  let stack = [];

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

    // traverse the vertices in its adjacency list recursively
    for (let v of adj[node]) {
      if (!visited[v]) traverse(v);
    }

    // push the current node into the stack before backtracking
    stack.push(node);
  }

  // fill the result array with the correct order
  while (stack.length) {
    result.push(stack.pop());
  }

  return result;
}

// function to add edges between vertices
function addEdge(adj, u, v) {
  adj[u].push(v);
}

// number of vertices
const V = 4;

// adjacency list for the vertices, we're initializing each array
// as an empty array
let adj = Array.from({ length: V }, () => []);

// edges of the graph
const edges = [
  [0, 1],
  [1, 2],
  [3, 1],
  [3, 2],
];

// adding all the edges
for (let e of edges) {
  addEdge(adj, e[0], e[1]);
}

console.log(topSort(adj, V)); // [ 3, 0, 1, 2 ]
