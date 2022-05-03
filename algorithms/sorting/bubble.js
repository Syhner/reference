const swap = require('./swap');

// Optimized BubbleSort with noSwaps
const bubbleSort = arr => {
  let swapped = false;

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
};

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
