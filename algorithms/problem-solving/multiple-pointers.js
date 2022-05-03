// Only works with ascending sorted arrays
const hasSumZeroPair = arr => {
  // Initialize pointers
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return true;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};

hasSumZeroPair([-3, 1, 3]); // true
hasSumZeroPair([-3, 1, 2]); // false
