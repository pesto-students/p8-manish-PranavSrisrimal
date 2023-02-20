function maxSum(array) {
  let sum = 0,
    subArray = [],
    sumMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (sum > sumMax) {
      sumMax = sum;
    }
    if (sum < 0) {
      sum = 0;
      subArray = [];
    }
  }
  return sumMax;
}

array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSum(array));
