/*
 * Take Antman out of the movie list
 */
const movies = [
  {id: 123433, film: 'La La Land'},
  {id: 349090, film: 'Deadpool'},
  {id: 984283, film: 'Antman'},
  {id: 239583, film: 'Girl on The Train'},
  {id: 234324, film: 'The Accountant'}
];
const id = 984283;
const movieIndex = movies.findIndex(movie => movie.id === id);
const newMovies = [...movies.slice(0, movieIndex), ...movie.slice(movieIndex + 1)];

/*
 * Get innerText from DOM
 *
 * DOM structure
 *  div.people
 *    p Wes
 *    p Kait
 *    p Randy
 */
// can also do Array.from(document.querySelectorAll('.people p')
const people = [...document.querySelectorAll('.people p')];
const names = people.map(person => person.textContent);
