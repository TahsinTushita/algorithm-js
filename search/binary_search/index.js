const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== num && start <= end) {
    if (num < arr[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === num) return arr[middle];
  return -1;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(nums, 6));
console.log(binarySearch(nums, 11));
