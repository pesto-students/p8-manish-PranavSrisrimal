function sortArray(A) {
  let low = 0,
    mid = 0,
    i = 0,
    high = A.length - 1;

  while (mid <= high && low < high) {
    if (A[i] == 0) {
      [A[i], A[low]] = [A[low], A[i]];
      low++;
      mid++;
    } else if (A[i] == 1) {
      mid++;
    } else {
      [A[i], A[high]] = [A[high], A[i]];
      high--;
      mid++;
      low++;
    }
    i++;
  }
  return A;
}
arr = [0, 2, 1, 2, 0];
console.log(sortArray(arr));
