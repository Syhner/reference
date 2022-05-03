// Alternative to arr.indexOf(val);
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
};

linearSearch([1, 7, 6], 7); // 1
linearSearch([1, 7, 6], 10); // -1
