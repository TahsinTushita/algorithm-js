// T: O(n*k)
// S: O(n + k)

// radix sort in ascending order
const radixSort = (arr, order) => {
  let maxNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) maxNum = arr[i];
  }

  let digit = 0;

  while (maxNum / 10 ** digit > 0) {
    ascendingSort(arr, digit);
    digit++;
  }

  return arr;
};

function ascendingSort(arr, digit) {
  let countArr = new Array(10).fill(0);
  let sortedArr = new Array(arr.length).fill(0);

  const whichDigit = 10 ** digit;

  for (let i = 0; i < arr.length; i++) {
    const countIdx = Math.floor(arr[i] / whichDigit) % 10;
    countArr[countIdx]++;
  }

  for (let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const countIdx = Math.floor(arr[i] / whichDigit) % 10;
    countArr[countIdx]--;

    const sortIdx = countArr[countIdx];
    sortedArr[sortIdx] = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = sortedArr[i];
  }

  return arr;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66], "ascending")); // [2, 24, 45, 66, 75, 90, 170, 802]
console.log(
  radixSort([8562, 454, 9028, 415, 67, 234, 85, 12, 2], "descending").reverse()
); // [2, 12, 67, 85, 234, 415, 454, 8562, 9028]
