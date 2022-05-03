const isAnagram = (first, second) => {
  // Guard clause
  if (first.length !== second.length) return false;

  // Frequency counter
  const lookup = {};

  // Functional - will iterate through all items
  [...first].forEach(letter => (lookup[letter] = (lookup[letter] || 0) + 1));

  // Non-functional since we may want to break
  // out before iterating through all items
  for (const letter of second) {
    if (lookup[letter]) lookup[letter]--;
    else return false;
  }

  /* Another approach is to iterate over first and
  second, and then over the frequency counter */

  return true;
};

isAnagram('cinema', 'anemic'); // true
isAnagram('cat', 'dog'); // false
