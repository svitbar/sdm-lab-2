class MyList {
  constructor() {
    this.items = [];
  }

  length() {
    return this.items.length;
  }

  append(el) {
    if (typeof el !== 'string' || el.length !== 1) {
      throw new Error('Element must be a string of length 1');
    } else if (!RegExp(/^\p{L}/, 'u').test(el)) {
      throw new Error('Element must be a char');
    } else this.items.push(el);
  }

  insert(el, index) {
    const err = 'Index must be in the range from 0 to ';

    if (typeof el !== 'string' || el.length !== 1) {
      throw new Error('Element must be a string of length 1');
    } else if (!RegExp(/^\p{L}/, 'u').test(el)) {
      throw new Error('Element must be a char');
    } else if (typeof index !== 'number') {
      throw new Error('Index must be a number');
    } else if (index < 0 || index >= this.items.length) {
      throw new Error(err + `${this.items.length - 1}`);
    } else this.items.splice(index, 0, el);
  }

  delete(index) {
    const err = `Index must be in the range from 0 to ${this.items.length - 1}`;
    let res;

    if (typeof index !== 'number') {
      throw new Error('Index must be a number');
    } else if (index < 0 || index >= this.items.length) {
      throw new Error(err);
    } else {
      res = this.items[index];
      this.items.splice(index, 1);
    }

    return res;
  }

  deleteAll(el) {
    this.items = this.items.filter((item) => item !== el);
  }

  get(index) {
    const err = `Index must be in the range from 0 to ${this.items.length - 1}`;
    let res;

    if (typeof index !== 'number') {
      throw new Error('Index must be a number');
    } else if (index < 0 || index >= this.items.length) {
      throw new Error(err);
    } else res = this.items[index];

    return res;
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
