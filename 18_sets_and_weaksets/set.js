const movies = new Set();
movies.add('La La Land');
movies.add('Deadpool');
movies.add('Ant-Man');
movies.add('The Girl on The Train');

// alternative of creating sets
const movieArray = ['La La Land', 'Deadpool', 'Ant-Man', 'The Girl on The Train'];
const movieSet = new Set(movieArray);

console.log(movies) // Set {'La La Land',...}
console.log(movies.size) // 4

movies.delete('The Girl on The Train') // true

console.log(movies.values()) // SetIterator {'La La Land',...}

const mv = movies.values();
console.log(mv.next()) // {value: 'La La Land', done: false}
console.log(mv.next()) // {value: 'Deadpool', done: false}
console.log(mv.next()) // {value: 'Ant-Man', done: false}
console.log(mv.next()) // {value: undefined, done: true}

for (const movie of movies) 
  console.log(movie)

movie.clear() // Set {}

