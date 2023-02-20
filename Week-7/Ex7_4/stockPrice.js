function stockPrice(A) {
  let max = { value: Math.max(...A), index: A.indexOf(Math.max(...A)) },
    min = { value: Math.min(...A), index: A.indexOf(Math.min(...A)) };

  if (min.index == 0) {
    return max.value - min.value;
  } 
  else if (min.index > max.index) {
    A = A.slice(min.index, A.length);
    max.value = Math.max(...A);
    return max.value - min.value;
  } 
  else {
    return 0;
  }
}

console.log(stockPrice([7, 1, 6, 5, 3])); // Output - 5
