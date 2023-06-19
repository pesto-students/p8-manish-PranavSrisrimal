var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

arr = [1, null, 2]; // 2
console.log("Depth: ", maxDepth(arr));
arr2 = [3, 9, 20, null, null, 15, 7]; // 3
console.log("Depth: ", maxDepth(arr2));
