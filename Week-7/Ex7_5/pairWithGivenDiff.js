function pairDiff(A, difference) {
  for (let i = 0; i < A.length; i++) {
    if (A.includes(A[i] + difference)) {
      return true;
    }
  }
  return false;
}

A = [5, 10, 3, 2, 50, 80];
B = 40;

console.log(pairDiff(A, B));
