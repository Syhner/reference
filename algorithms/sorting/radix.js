const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const digitCount = num =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

const mostDigits = nums => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radixSort = nums => {
  const maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    nums = digitBuckets.flat();
  }

  return nums;
};

radixSort([23, 345, 5467, 12, 2345, 9852]);
