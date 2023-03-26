const MyList = require('./list');

const list = new MyList;

console.log(`List length: ${list.length()}`);
console.log('\nAppend:');

list.append('L');

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

list.append('й');
list.append('a');
list.append('안');

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

console.log('\nInsert:');

console.log('\nInsert k at the 0 position:');
list.insert('k', 0);

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

console.log('\nInsert J at the 1 position:');
list.insert('J', 1);

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

console.log('\nInsert a at the 3 position:');
list.insert('a', 3);

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

console.log('\nInsert r at the 6 position:');
list.insert('r', 6);

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

console.log('\nDelete:');

console.log('\nDeleted element at the 0 position:');
console.log(list.delete(0));

console.log('\nDeleted element at the 6 position:');
console.log(list.delete(6));

console.log('\nDeleted element at the 2 position:');
console.log(list.delete(2));

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

list.append('a');
list.insert('a', 0);

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

console.log('\nGet element at the 1 position:');
console.log(list.get(1));

console.log('\nDeleteAll a:');
list.deleteAll('a');

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

console.log('\nDeleteAll :');
list.deleteAll();

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

const clone = list.clone();

console.log('\nList clone:');
clone.print();

clone.append('d');

console.log('\nList clone after modifying:');
clone.print();

console.log('\nList after clone modifying:');
list.print();

console.log('\nReversed list:');
list.reverse();
list.print();

list.append('й');
list.append('a');
list.append('й');
list.append('h');
list.append('a');
list.append('H');

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

console.log(`\nIndex of the first й in the list: ${list.findFirst('й')}`);
console.log(`Index of the first C in the list: ${list.findFirst('C')}`);
console.log(`Index of the first a in the list: ${list.findFirst('a')}`);
console.log(`Index of the first H in the list: ${list.findFirst('H')}`);

console.log(`\nIndex of the last й in the list: ${list.findLast('й')}`);
console.log(`Index of the last q in the list: ${list.findLast('q')}`);
console.log(`Index of the last a in the list: ${list.findLast('a')}`);
console.log(`Index of the last H in the list: ${list.findLast('H')}`);

console.log('\nClear:');

list.clear();

console.log('\nList 1:');
list.print();
console.log(`\nList length: ${list.length()}`);

list.append('й');
list.append('h');
list.append('a');

console.log('\nList 1:');
list.print();
console.log(`\nList 1 length: ${list.length()}`);

const list2 = new MyList;

list2.append('s');
list2.append('d');
list2.append('q');
list2.append('T');

console.log('\nList 2:');
list2.print();
console.log(`\nList 2 length: ${list2.length()}`);

list.extend(list2);

console.log('\nList 1 extended with list 2:');
list.print();
console.log(`\nList 1 length: ${list.length()}`);

list2.delete(2);

console.log('\nList 2 after modifying:');
list2.print();
console.log(`\nList 2 length: ${list2.length()}`);

console.log('\nList 1 after modifying list 2:');
list.print();
console.log(`\nList length: ${list.length()}`);
