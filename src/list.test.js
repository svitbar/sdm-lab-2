/* eslint-disable max-len */
const MyList = require('./list.js');

describe('Length:', () => {
  it('should return 0 for a new instance', () => {
    const myList = new MyList();
    expect(myList.length()).toBe(0);
  });

  it('should return number of elements in the list', () => {
    const myList = new MyList();
    myList.append('a');
    myList.append('b');
    myList.append('c');
    expect(myList.length()).toBe(3);
  });
});

describe('Append:', () => {
  it('should add an element at the end of the list', () => {
    const myList = new MyList();
    myList.append('a');
    myList.append('b');
    expect(myList.items).toEqual(['a', 'b']);
  });

  it('should throw an error if the char is not a string of length 1', () => {
    const myList = new MyList();
    expect(() => myList.append('hey')).toThrowError('Element must be a string of length 1');
    expect(() => myList.append(3)).toThrowError('Element must be a string of length 1');
  });

  it('should throw an error if argument is not a char', () => {
    const myList = new MyList();
    expect(() => myList.append('1')).toThrowError('Element must be a char');
    expect(() => myList.append('%')).toThrowError('Element must be a char');
  });
});

describe('Insert:', () => {
  const myList = new MyList();
  myList.append('d');
  myList.append('f');
  myList.append('s');

  it('should insert an element according to given index', () => {
    myList.insert('b', 1);
    expect(myList.items).toEqual(['d', 'b', 'f', 's']);
  });

  it('should throw an error if index is not in the range from 0 to length', () => {
    expect(() => myList.insert('a', -1)).toThrowError('Index must be in the range from 0 to 3');
    expect(() => myList.insert('a', 33)).toThrowError('Index must be in the range from 0 to 3');
  });

  it('should throw an error the element is not a string of length 1', () => {
    expect(() => myList.insert('hey', 1)).toThrowError('Element must be a string of length 1');
    expect(() => myList.insert(3, 'a')).toThrowError('Element must be a string of length 1');
  });

  it('should throw an error if argument is not a char', () => {
    expect(() => myList.insert('1', 2)).toThrowError('Element must be a char');
    expect(() => myList.append('%', 1)).toThrowError('Element must be a char');
  });

  it('should throw an error if index is not a number', () => {
    expect(() => myList.insert('a', 'one')).toThrowError('Index must be a number');
    expect(() => myList.insert('g', '%')).toThrowError('Index must be a number');
  });
});

describe('Delete:', () => {
  const myList = new MyList();
  myList.append('a');
  myList.append('b');
  myList.append('c');
  myList.append('c');
  myList.append('g');
  myList.append('c');

  it('should throw an error if index is not a number', () => {
    expect(() => myList.delete('#')).toThrowError('Index must be a number');
    expect(() => myList.delete(null)).toThrowError('Index must be a number');
  });

  it('should throw an error if index is not in the range from 0 to length', () => {
    expect(() => myList.delete(-1)).toThrowError('Index must be in the range from 0 to 5');
    expect(() => myList.delete(33)).toThrowError('Index must be in the range from 0 to 5');
  });

  it('should return the value of the deleted element', () => {
    expect(myList.delete(1)).toBe('b');
    expect(myList.delete(2)).toBe('c');
    myList.delete(0);
    expect(myList.items).toEqual(['c', 'g', 'c']);
  });
});

describe('DeleteAll:', () => {
  const myList = new MyList();
  myList.append('c');
  myList.append('b');
  myList.append('c');
  myList.append('d');
  myList.append('f');

  it('should delete all the same elements according to the given', () => {
    myList.deleteAll('c');
    expect(myList.items).toEqual(['b', 'd', 'f']);
    myList.deleteAll('d');
    expect(myList.items).toEqual(['b', 'f']);
  });

  it('should not modified list if it do not consist given element', () => {
    myList.deleteAll('a');
    expect(myList.items).toEqual(['b', 'f']);
  });
});

describe('Get:', () => {
  const myList = new MyList();
  myList.append('a');
  myList.append('b');
  myList.append('c');
  myList.append('c');

  it('should throw an error if index is not a number', () => {
    expect(() => myList.get('#')).toThrowError('Index must be a number');
    expect(() => myList.get(null)).toThrowError('Index must be a number');
  });

  it('should throw an error if index is not in the range from 0 to length', () => {
    expect(() => myList.get(-1)).toThrowError('Index must be in the range from 0 to 3');
    expect(() => myList.get(33)).toThrowError('Index must be in the range from 0 to 3');
  });

  it('should return the element according to the index', () => {
    expect(myList.get(1)).toBe('b');
    expect(myList.get(3)).toBe('c');
  });
});

describe('Clone:', () => {
  it('should return a copy of the list', () => {
    const myList = new MyList();
    myList.append('a');
    myList.append('b');
    myList.append('c');
    expect(myList.clone()).toEqual(['a', 'b', 'c']);
  });
});

describe('Reverse:', () => {
  it('should reverse the order of the elements in the list', () => {
    const myList = new MyList();
    myList.append('a');
    myList.append('b');
    myList.append('c');
    myList.reverse();
    expect(myList.items).toEqual(['c', 'b', 'a']);
  });
});

describe('FindFirst:', () => {
  const myList = new MyList();
  myList.append('c');
  myList.append('b');
  myList.append('c');
  myList.append('d');

  it('should return the first index of all the given element', () => {
    expect(myList.findFirst('b')).toBe(1);
    expect(myList.findFirst('c')).toBe(0);
  });

  it('should return -1 if list do not consist element', () => {
    expect(myList.findFirst('g')).toBe(-1);
  });
});

describe('FindLast:', () => {
  const myList = new MyList();
  myList.append('c');
  myList.append('b');
  myList.append('c');
  myList.append('d');

  it('should return the last index of all the given element', () => {
    expect(myList.findLast('b')).toBe(1);
    expect(myList.findLast('c')).toBe(2);
  });

  it('should return -1 if list do not consist element', () => {
    expect(myList.findLast('g')).toBe(-1);
  });
});

describe('Clear:', () => {
  it('should delete all the elements of the list', () => {
    const myList = new MyList();
    myList.append('a');
    myList.append('b');
    myList.clear();
    expect(myList.items).toEqual([]);
  });
});

describe('Extend:', () => {
  const myList = new MyList();
  myList.append('a');
  myList.append('b');
  const myList2 = new MyList();
  myList2.append('c');
  myList2.append('d');

  it('should add all elements from one list to another', () => {
    myList.extend(myList2);
    expect(myList.items).toEqual(['a', 'b', 'c', 'd']);
  });

  it('should not change first list when added list was modified', () => {
    myList2.append('e');
    expect(myList.items).toEqual(['a', 'b', 'c', 'd']);
  });
});
