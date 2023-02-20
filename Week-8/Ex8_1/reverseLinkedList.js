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
  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    if (index === 0) {
      return current.data;
    } else if (index > 0 && index < this.size) {
      while (count < index) {
        current = current.next;
        count++;
      }
      console.log(current.data);
    }
    return null;
  }

  // Remove at index
  removeAt(index) {
    let current = this.head,
      previous,
      count = 0;
    if (index === 0) {
      this.head = current.next;
    } else if (index > 0 && index < this.size) {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
      current.next = null;
    }
    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
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

  reverseList() {
    let current = this.head.next,
      previous,
      tail;
    previous = this.head;

    while (current != null) {
      tail = current.next;
      current.next = previous;
      previous = current;
      current = tail;
    }
    this.head.next = null;
    this.head = previous;
  }
}
const ll = new LinkedList();
ll.insertFirst(700);
ll.insertFirst(800);
ll.insertFirst(900);
ll.insertFirst(1000);
ll.insertLast(600);
ll.insertAt(500, 0);
ll.insertAt(400, 6);
ll.insertAt(300, 2);
ll.printListData();
ll.reverseList();
console.log("Reversed list : ");
ll.printListData();
