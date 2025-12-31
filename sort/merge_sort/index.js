// T: O(nlog n)
// S: O(n)

const merge = (arr1, arr2) => {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergeSort([38, 27, 43, 10])); // [10, 27, 38, 43]
console.log(mergeSort([7, 3, 2, 16, 24, 4, 11, 9])); // [ 2, 3, 4, 7, 9, 11, 16, 24 ]
