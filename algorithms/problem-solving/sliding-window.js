const maxConsecutiveSum = (arr, length) => {
  if (arr.length < length) return null;

  let tempSum = 0;
  let maxSum = 0;

  // Calculate initial window sum
  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // Adjust window until end
  for (let i = length; i < arr.length; i++) {
    tempSum = tempSum - arr[i - length] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

maxConsecutiveSum([2, 3, 4, 1], 3); // 9
maxConsecutiveSum([2, 3], 10); // null
