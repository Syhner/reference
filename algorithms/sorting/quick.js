const swap = require('./swap');

const choosePivotIndex = (arr, start = 0, end = arr.length - 1) => {
  // We are assuming the pivot is always the first element
  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = choosePivotIndex(arr, left, right); //3
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

quickSort([20, -3, 5, 3, 23]);
