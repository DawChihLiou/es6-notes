const movies = [
  { name: 'La La Land', review: 'awesome' },
  { name: 'Antman', review: 'great' },
  { name: 'Deadpool', review: 'hilarious' }
];

/*
 * Things to note
 *  1. multiline template string
 *  2. loop array inside of template with ${..}
 *  3. template strings inside of template string
 */
const markup = `
  <ul class="movie">
    ${ movies.map(movie => `<li>${ movie.name } is ${ movie.review }</li>`).join('') }
  </ul>
`;

document.body.innerHTML = markup;
