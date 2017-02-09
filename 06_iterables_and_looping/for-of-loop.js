const movies = ['La La Land', 'Antman', 'Deadpool'];

// add property to array
movies.year = 2016;

// add function to array prototype
Array.prototype.play = function () {
  console.log('playing movie');
}

movies.forEach(movie => {
  // fine but cannot break or continue the loop
  console.log(movie);
});

for (const i in movies) {
  // will print all the items and properties added to the array and prototype
  console.log(movies[i]); // La La Land, Antman, Deadpool, 2016, function() {..}
}

for (const movie of movies) {
  console.log(movie); // La La Land, Antman, Deadpool
}
