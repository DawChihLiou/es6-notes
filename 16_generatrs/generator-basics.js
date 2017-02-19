const movies = [
  {name: 'La La Land', year: 2016},
  {name: 'Deadpool', year: 2016},
  {name: 'Ant-Man', year: 2015}
];

function* loop (arr) {
  console.log('first call!');
  for (const item of arr) {
    yield item;
  }
}

const movieGenerator = loop(movies);
console.log(movieGenerator.next()); 
// first call!
// Object {"done":false, "value":Object {"name": "La La Land",..}}
console.log(movieGenerator.next());
// Object {"done":false, "value":Object {"name": "Deadpool",..}}
console.log(movieGenerator.next());
// Object {"done":false, "value":Object {"name": "Ant-Man",..}}
console.log(movieGenerator.next());
// Object {"done":true, "value": undefined}
