const check = require('./arg.js');

class MyList {
  constructor() {
    this.items = [];
  }

  length() {
    return this.items.length;
  }

  append(el) {
    check.checkElement(el);

    this.items.push(el);
  }

  insert(el, index) {
    check.checkElement(el);
    check.checkIndex(index, this.items);

    this.items.splice(index, 0, el);
  }

  delete(index) {
    check.checkIndex(index, this.items);

    const res = this.items[index];
    this.items.splice(index, 1);

    return res;
  }

  deleteAll(el) {
    this.items = this.items.filter((item) => item !== el);
  }

  get(index) {
    check.checkIndex(index, this.items);

    return this.items[index];
  }

  clone() {
    return Array.from(this.items);
  }

  reverse() {
    this.items.reverse();
  }

  findFirst(el) {
    return this.items.indexOf(el);
  }

  findLast(el) {
    return this.items.lastIndexOf(el);
  }

  clear() {
    this.items.length = 0;
  }

  extend(list) {
    this.items = this.items.concat(list.items);
  }
}

module.exports = MyList;
