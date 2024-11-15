// T: O(n + k)
// S: O(n + k)

// Ascending order
function countingSort(arr) {
  // find out the max value
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  // take a count array with the length of max + 1 to store the frequency of each number
  // in the array & fill it with 0
  let countArr = new Array(max + 1).fill(0);

  // take a sorted array with length of the original array & fill it with 0. This is to store the
  // sorted array
  let sortedArr = new Array(arr.length).fill(0);

  // store the frequencies of the numbers in the count array
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]]++;
  }

  // update the count array by adding the current number with the previous number & storing the sum
  // inside the current number
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i - 1];
  }

  // traverse the original array from the end, find the index of each number in the count array &
  // subtract 1 from the index number. This is the index number in the sorted array where the
  // number from the original array will go to so update the sorted array with this number
  for (let i = arr.length - 1; i >= 0; i--) {
    countArr[arr[i]]--;
    let sortIdx = countArr[arr[i]];
    sortedArr[sortIdx] = arr[i];
  }

  return sortedArr;
}

console.log(countingSort([4, 3, 12, 1, 5, 5, 3, 9])); // [1, 3, 3, 4, 5, 5, 9, 12]
console.log(countingSort([2, 5, 3, 0, 2, 3, 0, 3])); // [0, 0, 2, 2, 3, 3, 3, 5]
