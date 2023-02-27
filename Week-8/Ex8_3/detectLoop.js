class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert at last
  insertLast(data) {
    let current = this.head;
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
    } else if (index === this.size) {
      this.insertLast(data);
    } else {
      const node = new Node(data);
      let current, previous;
      let count = 0;

      current = this.head;

      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
      this.size++;
    }
  }

  // Print list
  printListData() {
    let current = this.head,
      output = "";
    while (current) {
      output += current.data + " -> ";
      current = current.next;
    }
    console.log(output);
  }

  defineLoop(x, N) {
    let current = this.head,
      pointer = new Node();
    for (let i = 0; i < N; i++) {
      if (i === x - 1) {
        pointer.data = current.data;
        pointer.next = current.next;
      }
      if (i === N - 1) {
        current.next = pointer;
        break;
      }
      current = current.next;
    }
  }

  detectLoop() {
    let fast = this.head,
      slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
}

const ll = new LinkedList();
ll.insertFirst(1);
ll.insertLast(3);
ll.insertLast(4);
ll.insertLast(5);
ll.insertLast(6);
ll.insertLast(7);
ll.printListData();

// Case 1
console.log("Case 1: ");
ll.defineLoop(0, 6);
console.log(ll.detectLoop());
// Case 2
console.log("Case 2: ");
ll.defineLoop(5, 6);
console.log(ll.detectLoop());
