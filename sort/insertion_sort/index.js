// T: O(n^2)
// S: O(1)

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currVal) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currVal;
  }

  return arr;
};

console.log(insertionSort([85, 12, 59, 45, 72, 51])); // [12, 45, 51, 59, 72, 85]
console.log(insertionSort([12, 11, 13, 5, 6])); // [5, 6, 11, 12, 13]
