const binarySearch = (arr, elem) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== elem && left <= right) {
    if (elem < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === elem ? middle : -1;
};

binarySearch([2, 5, 6, 9], 6); // 2
binarySearch([2, 5, 6, 9], 10); // -1
