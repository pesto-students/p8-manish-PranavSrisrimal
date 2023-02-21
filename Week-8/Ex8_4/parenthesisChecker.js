class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.count++;
    this.items[this.count] = element;
  }

  pop() {
    let deletedItem = this.items[this.count];
    this.count -= 1;
    return deletedItem;
  }

  parenthesisChecker(string) {
    for (let i = 0; i < string.length; i++) {
      let bracket = string[i];

      if (bracket == "(" || bracket == "[" || bracket == "{") {
        // Push the element in the stack
        this.items.push(bracket);
        this.count++;
        continue;
      }

      console.log(this.items);

      let value;
      switch (bracket) {
        case ")":
          value = this.items.pop();

          if (value == "]" || value == "}") {
            return false;
          } else {
            this.count--;
          }
          break;
        case "]":
          value = this.items.pop();

          if (value == ")" || value == "}") {
            return false;
          } else {
            this.count--;
          }
          break;
        case "}":
          value = this.items.pop();

          if (value == ")" || value == "]") {
            return false;
          } else {
            this.count--;
          }
          break;
      }
    }
    console.log(this.items);
    return this.count === 0;
  }
}

const stack = new Stack();
console.log(stack.parenthesisChecker("[([)")); //false
const stack1 = new Stack();
console.log(stack1.parenthesisChecker("[()]{}{()()}")); //true
