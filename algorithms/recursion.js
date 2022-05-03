// Iterative approach
const factorialIterative = num => {
  let total = 1;

  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
};

// Recursive approach, base case of num === 1
const factorial = num => {
  return num === 1 ? 1 : factorial(num - 1);
};

// Helper method recursion
// Inner recursive function mutates outer scoped variable
const outer = arr => {
  const output = [];

  const helper = () => {
    output.push('something');
  };

  helper(arr);
  return output;
};

// Pure recursion
// Does not mutate inputs, helper method not required
// Array slice, concat, and spread operator are pure
const pure = arr => {
  let newArr = [];

  if (arr.length === 0) return [];
  else newArr.push('something');

  newArr.concat(pure(arr.slice(1)));

  return newArr;
};
