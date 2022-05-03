/* Iterator using for loop */

for (let i = 0; i < 5; i++) {}

/* Iterator using generator */

const range = function* (start = 0, end, step = 1) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  while (start * Math.sign(step) < end * Math.sign(step)) {
    yield start;
    start += step;
  }
};

// Works like range in python
for (const n of range(2, -5, -2)) {
  console.log(n);
}
