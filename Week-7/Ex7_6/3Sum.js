function threeSum(A, target) {
  let minSum = Number.NEGATIVE_INFINITY,
    maxSum = Number.POSITIVE_INFINITY,
    curSum = 0,
    finalArr = [];
    
  // Sorting the array in asc order
  const sortedArr = A.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else return 0;
  });

  for (let a = 0; a < sortedArr.length - 1; a++) {
    let l = a + 1,
      r = sortedArr.length - 1;
    while (l < r) {
      curSum = sortedArr[a] + sortedArr[l] + sortedArr[r];
      if (curSum === target) {
        finalArr[0] = sortedArr[a];
        finalArr[1] = sortedArr[l];
        finalArr[2] = sortedArr[r];
        return finalArr;
      } else if (curSum < target && curSum > minSum) {
        minSum = curSum;
        finalArr[0] = sortedArr[a];
        finalArr[1] = sortedArr[l];
        finalArr[2] = sortedArr[r];
        l += 1;
      } else if (curSum > target && curSum < maxSum) {
        maxSum = curSum;
        finalArr[0] = sortedArr[a];
        finalArr[1] = sortedArr[l];
        finalArr[2] = sortedArr[r];
        r -= 1;
      } else break;
    }
  }
  if (target - minSum < maxSum - target) {
    return "minSum: ", finalArr;
  } else if (target - minSum > maxSum - target) {
    return "maxSum: ", finalArr;
  } else return finalArr;
}

sample = [-1, 2, 1, -4, 8, 9, -2, 0, 4, 15];
console.log(threeSum(sample, -10));
