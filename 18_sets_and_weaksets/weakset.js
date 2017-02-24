let movie1 = { name: 'La La Land', year: 2016 };
let movie2 = { name: 'Deadpool', year: 2016 };

const weakMovies = new WeakSet([movie1, movie2]);
console.log(weakMovies); 
// Set {Object {name: 'La La Land', year: 2016}, Object {name: 'Deadpool', year: 2016}}

movie1 = null;
console.log(weakMovies); // Set {Object {name: 'Deadpool', year: 2016}}
