const arr = [10, 1, 8, 4, 3, 6, 7, 2, 9, 5];

const search = (num) => {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) return i;
  }
  return -1;
};

console.log(search(6)); // 5
console.log(search(11)); // -1
