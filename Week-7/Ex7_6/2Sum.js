function twoSum(A, target) {
  let minSum = Number.NEGATIVE_INFINITY,
    maxSum = Number.POSITIVE_INFINITY,
    curSum = 0,
    finalArr = [];

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      curSum = A[i] + A[j];

      if (curSum === target) {
        finalArr[0] = A[i];
        finalArr[1] = A[j];

        return finalArr;
      } else if (curSum < target && curSum > minSum) {
        minSum = curSum;

        finalArr[0] = A[i];
        finalArr[1] = A[j];
      } else if (curSum > target && curSum < maxSum) {
        maxSum = curSum;

        finalArr[0] = A[i];
        finalArr[1] = A[j];
      }
    }
  }
  if (target - minSum < maxSum - target) {
    return "minSum: ", finalArr;
  } else if (target - minSum > maxSum - target) {
    return "maxSum: ", finalArr;
  } else return finalArr;
}

sample = [-1, 2, 1, -4];
console.log(twoSum(sample, -5));
