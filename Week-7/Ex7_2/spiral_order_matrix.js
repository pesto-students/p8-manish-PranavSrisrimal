function spiral_order(A) {
  let top = 0,
    down = A.length - 1,
    left = 0,
    right = A[0].length - 1,
    direction = 0,
    spiralArr = [];

  while (top <= down && left <= right) {
    // Left to Right
    if (direction == 0) {
      for (let x = left; x <= right; x++) {
        spiralArr.push(A[top][x]);
      }
      top++;
    }
    // Top to Down
    else if (direction == 1) {
      for (let x = top; x <= down; x++) {
        spiralArr.push(A[x][right]);
      }
      right--;
    }
    // Right to Left
    else if (direction == 2) {
      for (let x = right; x >= left; x--) {
        spiralArr.push(A[down][x]);
      }
      down--;
    }
    // Down to Top
    else if (direction == 3) {
      for (let x = down; x >= top; x--) {
        spiralArr.push(A[x][left]);
      }
      left++;
    }
    direction = (direction + 1) % 4;
  }
  return (spiralArr);
}

console.log(spiral_order(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10,11,12]
    ]
  ));


