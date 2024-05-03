const bubbleSort = (arr) => {
  let isSwapped;
  for (let i = 0; i < arr.length; i++) {
    isSwapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  return arr;
};

console.log(bubbleSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
console.log(bubbleSort([234, 43, 55, 63, 5, 6, 235, 547])); // [5, 6, 43, 55, 63, 234, 235, 547]
