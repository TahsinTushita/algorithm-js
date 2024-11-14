// Descending bubble sort
// T: O(n^2)
// S: O(1)

function descendingBubbleSort(arr) {
  let isSwapped = false;
  for (let i = 0; i < arr.length; i++) {
    isSwapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      isSwapped = true;
    }

    if (!isSwapped) break;
  }

  return arr;
}

console.log(descendingBubbleSort([5, 1, 4, 2, 8]));
console.log(descendingBubbleSort([234, 43, 55, 63, 5, 6, 235, 547]));
