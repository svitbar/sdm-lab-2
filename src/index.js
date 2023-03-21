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

const clone = list.clone();
console.log(clone);
clone.push('d');
console.log(clone);

list.deleteAll('a');
list.deleteAll();

console.log(list.length());
console.log(list);

console.log(list.get(1));

console.log(list.clone());

list.reverse();
console.log(list);

list.append('й');
list.append('a');
list.append('й');
list.append('h');

console.log(list);

console.log(list.findFirst('й'));
console.log(list.findFirst('C'));

console.log(list.findLast('й'));
console.log(list.findLast('q'));

list.clear();
console.log(list);

list.append('a');
list.append('й');
list.append('h');

console.log(list);

const list2 = new MyList;

list2.append('s');
list2.append('d');
list2.append('q');
list2.append('T');

list.extend(list2);
console.log(list);

list2.delete(2);
console.log(list2);
console.log(list);
