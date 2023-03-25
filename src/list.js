const check = require('./arg.js');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  append(el) {
    check.checkElement(el);

    const node = new Node(el);

    if (!this.head) {
      this.head = node;
      node.next = this.head;
    } else {
      let current = this.head;

      while (current.next !== this.head) {
        current = current.next;
      }

      current.next = node;
      node.next = this.head;
    }

    this.size++;
  }

  insert(el, index) {
    check.checkElement(el);
    check.checkIndex(index, this.size);

    const node = new Node(el);
    let current = this.head;
    let count = 0;

    if (index === 0) {
      node.next = this.head;
      this.head = node;

      while (count !== this.size - 1) {
        current = current.next;
        count++;
      }

      current.next = this.head;
    } else {
      while (count !== index - 1) {
        current = current.next;
        count++;
      }

      node.next = current.next;
      current.next = node;
    }

    this.size++;
  }

  print() {
    if (!this.head) {
      return;
    }

    let current = this.head;

    do {
      console.log(current.value);
      current = current.next;
    } while (current !== this.head);
  }

  delete(index) {
    check.checkIndex(index, this.size);

    let res;
    let current = this.head;
    let count = 0;

    if (index === 0) {
      res = this.head;
      this.head = current.next;

      while (count !== this.size - 1) {
        current = current.next;
        count++;
      }

      current.next = this.head;
    } else {
      while (count !== index - 1) {
        current = current.next;
        count++;
      }
      res = current.next;

      current.next = current.next.next;
    }

    this.size--;

    return res;
  }

  deleteAll(el) {
    let current = this.head;
    let count = 0;

    while (count !== this.size) {
      if (current.value !== el) {
        current = current.next;
        count++;
      } else {
        this.delete(count);
        current = this.head;
        count = 0;
      }
    }
  }

  get(index) {
    check.checkIndex(index, this.size);
    let current = this.head;
    let count = 0;

    while (count !== this.size - 1) {
      if (count === index) return current;
      else {
        current = current.next;
        count++;
      }
    }

    return current;
  }

  clone() {
    const newList = new MyList;
    let current = this.head;
    let count = 0;

    while (count !== this.size) {
      newList.append(current.value);

      current = current.next;
      count++;
    }

    return newList;
  }

  reverse() {
    let current = this.head;
    let count = 0;

    while (count !== this.size) {
      this.insert(current.value, 0);
      current = current.next;
      this.delete(count + 1);
      count++;
    }
  }

  findFirst(el) {
    let current = this.head;
    let count = 0;

    while (count !== this.size) {
      if (current.value === el) {
        return count;
      } else {
        current = current.next;
        count++;
      }
    }
    return -1;
  }

  findLast(el) {
    this.reverse();

    let current = this.head;
    let count = 0;

    while (count !== this.size) {
      if (current.value === el) {
        return this.size - 1 - count;
      } else {
        current = current.next;
        count++;
      }
    }
    return -1;
  }

  clear() {
    this.head = null;
  }

  extend(list) {
    let current = list.head;
    let count = 0;

    while (count !== list.size) {
      this.append(current.value);
      current = current.next;

      count++;
    }
  }
}

module.exports = MyList;
