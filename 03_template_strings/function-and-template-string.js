const movie = {
  name: 'La La Land', 
  director: 'Damien Chazelle',
  casts: ['Ryan Gosling', 'Emma Stone', 'John Legend']
};

function renderCasts (casts) {
  return `
    ${ casts.map(cast => `<li>${ cast }</li>`).join('') }
  `;
}

const markup = `
  <ul>
    <h1>${ movie.name }</h1>
    <h4>${ movie.director }</h4>
    ${ renderCasts(movie.casts) }
  </ul>
`;

document.body.innerHTML = markup;
