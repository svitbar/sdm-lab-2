const MyList = require('./list');

const list = new MyList;

console.log(list.length());

list.append('L');
list.append('й');
list.append('a');
list.append('안');

console.log(list.length());
console.log(list);

list.insert('a', 0);
list.insert('J', 1);
list.insert('a', 3);

console.log(list.length());
console.log(list);

console.log(list.delete(1));

list.deleteAll('a');
list.deleteAll();

console.log(list.length());
console.log(list);

console.log(list.get(1));

