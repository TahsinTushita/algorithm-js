// T: O(V + E)
// S: O(V)

// parameters are the starting node & the adjacency list
function bfs(s, adjList) {
  // an array to keep track of the nodes that we've already
  // visited so that we don't keep going in a cycle
  let visited = new Array(adjList.length).fill(false);

  // the queue which we'll use to traverse the graph
  let q = [];

  // the array that will contain the nodes in the searched order
  let arr = [];

  // set the visited node index for the starting node to true &
  // push the starting node in the queue
  visited[s] = true;
  q.push(s);

  // traverse through the nodes in the queue until it's empty
  while (q.length) {
    // take out the first node from the queue and push it to the
    // searched array
    let curr = q.shift();
    arr.push(curr);

    // traverse through the adjacency list of the current node
    for (let node of adjList[curr]) {
      // if the node of from the adjacency list is not visited then
      // set the visited index for that node to true and push that
      // node in the queue
      if (!visited[node]) {
        visited[node] = true;
        q.push(node);
      }
    }
  }

  return arr;
}

// add the nodes to each others adjacency list
function addNode(node1, node2) {
  adjList[node1].push(node2);
  adjList[node2].push(node1);
}

// number of nodes
const V = 13;

// this is to create the adjacency list for the nodes. We're taking an array
// of arrays whose length is equal to the number of nodes. Each item in the
// array is an empty array.
let adjList = Array.from({ length: V }, () => []);

// we're adding the edges between the nodes creating the whole graph
addNode(0, 9);
addNode(0, 7);
addNode(0, 11);
addNode(9, 10);
addNode(9, 8);
addNode(7, 11);
addNode(7, 3);
addNode(7, 6);
addNode(10, 1);
addNode(8, 1);
addNode(8, 12);
addNode(3, 2);
addNode(3, 4);
addNode(6, 5);
addNode(12, 2);

console.log(bfs(0, adjList)); // [0, 9, 7, 11, 10, 8, 3, 6, 1, 12, 2, 4, 5]
