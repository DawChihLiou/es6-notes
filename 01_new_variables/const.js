/*
 * Cannot reassign objects to const; however, modifying property of the 
 * assigned const object is allowed. 
 */ 
const movie = {
  name: 'lalaland',
  review: '5 stars'
};

movie = {
  name: 'deadpool',
  review: '5 stars'
};
// Uncaught TypeError: Assignment to constant variable.

movie.name = 'antman';
console.log(movie); // { name: 'antman', review: '5 stars' }

/*
 * Cannot modify assigned const object if Object.freeze() is called on it
 */ 
Object.freeze(movie);
movie.name = 'lalaland'
console.log(movie) // { name: 'antman', review: '5 stars' }
