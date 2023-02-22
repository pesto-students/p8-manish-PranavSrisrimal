class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    let deletedItem = this.items[this.count];
    this.count -= 1;
    return deletedItem;
  }

  peekStack() {
    return this.items[this.count - 1];
  }

  clearStack() {
    this.count = 0;
    this.items = [];
  }

  isEmpty() {
    if (this.count === 0) {
      return true;
    } else {
      return false;
    }
  }

  nextGreaterElement(array) {
    //Declare o/p array

    let output = [],
      n = array.length;

    for (let j = n - 1; j >= 0; j--) {
      while (this.isEmpty() == false && array[j] >= this.peekStack()) {
        this.pop();
      }
      if (j < n) {
        if (this.count != 0) {
          output[j] = this.peekStack();
        } else {
          output[j] = -1;
        }
      }

      this.push(array[j]);
    }
    this.clearStack();
    return output;
  }
}
const stack = new Stack();
console.log(stack.nextGreaterElement([6, 8, 0, 1, 3])); // [ 8, -1, 1, 3, -1 ]
console.log(stack.nextGreaterElement([1, 3, 2, 4])); // [ 3, 4, 4, -1 ]
