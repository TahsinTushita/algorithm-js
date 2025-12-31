// T: O(n^2)
// S: O(1)

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([5, 1, 4, 2, 8])); // [ 1, 2, 4, 5, 8 ]
console.log(selectionSort([3, 2, 1, 4, 6, 5, 7, 9, 8, 10])); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
