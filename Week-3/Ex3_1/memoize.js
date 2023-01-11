function memoize(fn) {
  const prevValues = new Map();
  return function (...args) {
    const key = args;
    console.log("fn called with " + args);
    console.log(prevValues);
    if (prevValues.has(key)) {
      return prevValues.get(key);
    }
    prevValues.set(key, fn(...args));
    return prevValues.get(key);
  };
}

function add(...args) {
  const array = args;
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    // take every item in the array and add it to sum variable
    sum += array[i];
  }
  return sum;
}

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const memoizeAdd = memoize(add);

time(() => memoizeAdd(100, 100));

time(() => memoizeAdd(100));

time(() => memoizeAdd(100, 200));

time(() => memoizeAdd(100, 100));
