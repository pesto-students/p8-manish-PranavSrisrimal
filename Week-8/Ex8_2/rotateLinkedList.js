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

  rotateList(k) {
    let current;
    for (let i = 1; i <= k; i++) {
      current = this.head;
      this.insertLast(current.data);
      this.removeAt(0);
      console.log(`Rotate ${i} `);
      this.printListData();
    }
  }
}
const ll = new LinkedList();
ll.insertFirst(9);
ll.insertFirst(8);
ll.insertFirst(7);
ll.insertFirst(4);
ll.insertFirst(2);
ll.printListData();
ll.rotateList(3); // k = 3
