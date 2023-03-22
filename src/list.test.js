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
