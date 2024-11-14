// ascending heap sort
// T: O(nlogn)
// S: O(1)

function heapify(arr, n, i) {
  // initialize largest as root
  let largest = i;

  // get the left index of the largest element
  let left = 2 * i + 1;

  // get the right index of the largest element
  let right = 2 * i + 2;

  // check if the left element is greater than the root
  if (left < n && arr[left] > arr[largest]) largest = left;

  // check if the right element is greater than the largest element
  if (right < n && arr[right] > arr[largest]) largest = right;

  // if largest is not root
  if (largest !== i) {
    let temp = arr[largest];
    arr[largest] = arr[i];
    arr[i] = temp;

    // recusively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  // build the heap tree
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // remove the root from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // move the current root to the end
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // heapify the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

console.log(heapSort([9, 4, 3, 8, 10, 2, 5])); // [2, 3, 4, 5, 8, 9, 10]
