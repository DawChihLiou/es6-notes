/**
 * WeakMaps don't have size property and can't be iterated.
 * It work with garbage collector
 */
let movie1 = { name: 'Deadpool' };
let movie2 = { name: 'Ant-Man' };

const strong = new Map();
const weak = new WeakMap();

strong.set(movie1, 'Deadpool is awesome!');
seak.set(movie2, 'Ant-Man is awesome!');

movie1 = null;
movie2 = null;

console.log(strong); // Map {Object {name: Deadpool} => "Deadpool is awesome!"}
console.log(weak); // WeakMap {}
