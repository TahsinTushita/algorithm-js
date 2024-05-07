// T: O(nlog n)  --- for a sorted array or reversely sorted array it's O(n^2)

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([7, 6, 10, 5, 9, 2, 1, 15, 7])); // [1, 2, 5, 6, 7, 7, 9, 10, 15]
console.log(quickSort([4, 3, -10, -3, 11])); // [-10, -3, 3, 4, 11]
