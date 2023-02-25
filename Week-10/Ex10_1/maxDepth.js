function maxDepth(bst) {
  let depth = 0;
  let Q = [],
    i = 0;
  if (bst[i] != null) {
    depth++;
    Q.push(bst[i]);
    while (Q.length > 0) {
      for (let j = 0; j < Q.length; j++) {
        bst[i] = Q.shift();
        i++;
        if (bst[i] != null) {
          Q.push(bst[i]);
          i++;
        } else {
          i++;
        }
      }
      depth++;
      
    }
    return depth;
  } else {
    return null;
  }
}
arr = [1, null, 2]; // 2
console.log(maxDepth(arr));
arr2 = [3,9,20,null,null,15,7]; // 3
console.log(maxDepth(arr2));
