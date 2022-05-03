const merge = (arr1, arr2) => {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add remaining items incase arr1 and arr2 were different sizes
  merged.push(...arr1.slice(i));
  merged.push(...arr2.slice(j));

  return merged;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

mergeSort([10, 24, 76, 73]);
