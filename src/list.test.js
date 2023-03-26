const MyList = require('./list.js');

const error = {
  length: 'Element must be a string of length 1',
  char: 'Element must be a char',
  range: 'Index must be in the range from 0 to ',
  number: 'Index must be a number',
};

describe('MyList:', () => {
  let myList;

  beforeEach(() => myList = new MyList());

  describe('Length:', () => {
    it('should return 0 for a new instance', () => {
      expect(myList.length()).toBe(0);
    });

    it('should return a number of elements in the list', () => {
      myList.append('a');
      myList.append('b');
      myList.append('c');
      expect(myList.length()).toBe(3);
    });
  });

  describe('Append:', () => {
    it('should add an element at the end of the list', () => {
      myList.append('a');
      myList.append('b');
      myList.append('й');
      myList.append('D');
      expect(myList.print()).toEqual('a, b, й, D');

      const myList2 = new MyList();
      myList2.append('f');
      expect(myList2.print()).toEqual('f');
    });

    it('should throw an error if argument is not a string of length 1', () => {
      expect(() => myList.append('hey')).toThrowError(error.length);
      expect(() => myList.append(3)).toThrowError(error.length);
    });

    it('should throw an error if argument is not a char', () => {
      expect(() => myList.append('1')).toThrowError(error.char);
      expect(() => myList.append('%')).toThrowError(error.char);
    });
  });

  describe('Insert:', () => {
    beforeEach(() => {
      myList.append('d');
      myList.append('F');
      myList.append('s');
    });

    it('should insert an element at the specified index', () => {
      myList.insert('b', 1);
      expect(myList.print()).toEqual('d, b, F, s');
    });

    it('should throw an error if the index is out of range', () => {
      expect(() => myList.insert('a', -1)).toThrowError(error.range + '2');
      expect(() => myList.insert('a', 33)).toThrowError(error.range + '2');
    });

    it('should throw an error if argument is not a string of length 1', () => {
      expect(() => myList.insert('hey', 1)).toThrowError(error.length);
      expect(() => myList.insert(3, 'a')).toThrowError(error.length);
    });

    it('should throw an error if argument is not a char', () => {
      expect(() => myList.insert('1', 2)).toThrowError(error.char);
      expect(() => myList.append('%', 1)).toThrowError(error.char);
    });

    it('should throw an error if index is not a number', () => {
      expect(() => myList.insert('a', 'one')).toThrowError(error.number);
      expect(() => myList.insert('g', '%')).toThrowError(error.number);
    });
  });

  describe('Delete:', () => {
    beforeEach(() => {
      myList.append('a');
      myList.append('b');
      myList.append('c');
      myList.append('C');
      myList.append('g');
      myList.append('c');
    });

    it('should throw an error if index is not a number', () => {
      expect(() => myList.delete('#')).toThrowError(error.number);
      expect(() => myList.delete(null)).toThrowError(error.number);
    });

    it('should throw an error if the index is out of range', () => {
      expect(() => myList.delete(-1)).toThrowError(error.range + '5');
      expect(() => myList.delete(33)).toThrowError(error.range + '5');
    });

    it('should return the value of the deleted element', () => {
      expect(myList.delete(1)).toBe('b');
      expect(myList.delete(4)).toBe('c');
      myList.delete(0);
      expect(myList.print()).toEqual('c, C, g');
    });
  });

  describe('DeleteAll:', () => {
    beforeEach(() => {
      myList.append('c');
      myList.append('d');
      myList.append('e');
      myList.append('E');
      myList.append('a');
      myList.append('e');
    });

    it('should delete argument and all its duplicates', () => {
      myList.deleteAll('e');
      expect(myList.print()).toEqual('c, d, E, a');
      myList.deleteAll('d');
      expect(myList.print()).toEqual('c, E, a');
    });

    it('should not modified list if it do not contain argument', () => {
      myList.deleteAll('m');
      expect(myList.print()).toEqual('c, d, e, E, a, e');
    });
  });

  describe('Get:', () => {
    beforeEach(() => {
      myList.append('a');
      myList.append('b');
      myList.append('c');
      myList.append('c');
    });

    it('should throw an error if index is not a number', () => {
      expect(() => myList.get('#')).toThrowError(error.number);
      expect(() => myList.get(null)).toThrowError(error.number);
    });

    it('should throw an error if the index is out of range', () => {
      expect(() => myList.get(-1)).toThrowError(error.range + '3');
      expect(() => myList.get(33)).toThrowError(error.range + '3');
    });

    it('should return element according to the index', () => {
      expect(myList.get(1).value).toBe('b');
      expect(myList.get(3).value).toBe('c');
    });
  });

  describe('Clone:', () => {
    it('should return a copy of the list', () => {
      myList.append('a');
      myList.append('b');
      myList.append('c');
      expect(myList.clone().print()).toEqual('a, b, c');
    });
  });

  describe('Reverse:', () => {
    it('should reverse the order of the elements in the list', () => {
      myList.append('a');
      myList.append('b');
      myList.append('c');
      myList.reverse();
      expect(myList.print()).toEqual('c, b, a');
    });
  });

  describe('FindFirst:', () => {
    beforeEach(() => {
      myList.append('c');
      myList.append('d');
      myList.append('a');
      myList.append('c');
      myList.append('C');
    });

    it('should return the first index of all the given element', () => {
      expect(myList.findFirst('d')).toBe(1);
      expect(myList.findFirst('c')).toBe(0);
    });

    it('should return -1 if list do not contain element', () => {
      expect(myList.findFirst('g')).toBe(-1);
    });
  });

  describe('FindLast:', () => {
    beforeEach(() => {
      myList.append('c');
      myList.append('d');
      myList.append('a');
      myList.append('c');
      myList.append('C');
    });

    it('should return the last index of all the given element', () => {
      expect(myList.findLast('d')).toBe(1);
      expect(myList.findLast('c')).toBe(3);
    });

    it('should return -1 if list do not contain element', () => {
      expect(myList.findLast('g')).toBe(-1);
    });
  });

  describe('Clear:', () => {
    it('should delete all the elements of the list', () => {
      myList.append('a');
      myList.append('b');
      myList.clear();
      expect(myList.length()).toEqual(0);
      expect(myList.print()).toEqual('');
    });
  });

  describe('Extend:', () => {
    let myList2;

    beforeEach(() => {
      myList.append('a');
      myList.append('b');
      myList2 = new MyList();
      myList2.append('c');
      myList2.append('d');
    });

    it('should add all elements from one list to another', () => {
      myList.extend(myList2);
      expect(myList.print()).toEqual('a, b, c, d');
    });

    it('should not change first list when added list was modified', () => {
      myList.extend(myList2);
      myList2.append('e');
      expect(myList.print()).toEqual('a, b, c, d');
    });
  });
});
