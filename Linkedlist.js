class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    if (index < 0 || index > this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    temp.value = value;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let temp = this.head;

    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    let target = temp.next;
    temp.next = target.next;
    target.next = null;
    this.length--;
    return target;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev;
    // let next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
  printLL() {
    let temp = this.head;
    let s = "";
    while (temp) {
      s += temp.value + "--->";
      temp = temp.next;
    }
    console.log(s);
  }
}

let myLl = new LinkedList(5);
myLl.push(7);
myLl.push(4);
myLl.push(27);
myLl.push(12);
myLl.unshift(3);

myLl.printLL();

myLl.set(3, 100);

myLl.printLL();

myLl.insert(5, 50);

myLl.printLL();

myLl.remove(3);
myLl.printLL();

myLl.reverse();
myLl.printLL();
