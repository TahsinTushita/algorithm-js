const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) return i;
  }
  return -1;
};

const nums = [10, 1, 8, 4, 3, 6, 7, 2, 9, 5];

console.log(linearSearch(nums, 6)); // 5
console.log(linearSearch(nums, 11)); // -1
