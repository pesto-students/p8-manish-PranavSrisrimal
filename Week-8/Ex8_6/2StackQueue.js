class Stack {
  constructor() {
    this.items = {};
    this.index = -1;
  }

  push(element) {
    this.index++;
    this.items[this.index] = element;
  }

  pop() {
    if (this.index === -1) return undefined;
    let deletedItem = this.items[this.index];
    delete this.items[this.index];
    this.index--;
    return deletedItem;
  }

  peekStack() {
    return this.items[this.index];
  }

  clearStack() {
    this.index = -1;
    this.items = [];
  }

  isEmpty() {
    if (this.index === -1) {
      return true;
    } else {
      return false;
    }
  }
}
const s1 = new Stack();
const s2 = new Stack();

function queue(arr) {
  let i = 0,
    output = [],
    temp = 0,
    ind = 0;

  while (i < arr.length) {
    // Push
    if (arr[i] === 1) {
      s1.push(arr[i + 1]);
      i += 2;
    }
    // Pop 
    else if (arr[i] === 2) {
      if (s1.isEmpty() === false && s2.isEmpty() === true) {
        while (s1.isEmpty() === false) {
          s2.push(s1.pop());
        }
        output[ind] = s2.pop();
        ind++;
        i++;
      } else if (s2.isEmpty() === false && s1.isEmpty() === false) {
        output[ind] = s2.pop();
        ind++;
        i++;
      } else if (s2.isEmpty() === true && s1.isEmpty() === true) {
        output[ind] = -1;
        ind++;
        i++;
      }
    }
  }

  return output;
}
console.log(queue([1, 2, 1, 3, 2, 1, 4, 2])); [2,3]
console.log(queue([1, 2, 2, 2, 1, 4])); // [2,-1]
