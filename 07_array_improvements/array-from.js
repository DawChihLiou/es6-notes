/*
 * Array.from is good for DOM
 *
 * DOM structure
 *  div.movies
 *    p La La Land
 *    p Deadpool
 *    p Antman
 */

/*
  const movies = document.querySelectorAll('.movies p');
  console.log(movies) // [p, p, p] ...  __proto__: NodeList
  
  // movies is an array-like object
  const movieNames = movies.map(movie => movie.textContent) 
  // TypeError: movies.map is not a function

  const movieArray = Array.from(movies);
  movieNames = movie.map(movie => movie.textContent);
*/

// to clean up
const movies = Array.from(document.querySelectorAll('.movies p'));
const movieNames = movies.map(movie => movie.textContent);

// further, combine Array.from and map
movies = document.querySelectorAll('.movie p');
movieNames = Array.from(movies, movie => movie.textContent);
