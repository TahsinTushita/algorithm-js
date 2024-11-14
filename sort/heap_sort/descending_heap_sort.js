// Descending heap sort
// T: O(nlogn)
// S: O(1)

function minHeapify(arr, n, i) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] < arr[smallest]) smallest = left;
  if (right < n && arr[right] < arr[smallest]) smallest = right;

  if (smallest !== i) {
    let temp = arr[smallest];
    arr[smallest] = arr[i];
    arr[i] = temp;

    minHeapify(arr, n, smallest);
  }
}

function descendingHeapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    minHeapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    minHeapify(arr, i, 0);
  }

  return arr;
}

console.log(descendingHeapSort([9, 4, 3, 8, 10, 2, 5])); // [10, 9, 8, 5, 4, 3, 2]
