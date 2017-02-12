const key = 'good movie';
const value = 'La La Land';

const musical = {
  [key]: value,
  [`not exactly a ${key} of musical`]: findSameYearMovie(value)
};

function findSameYearMovie (movie) {
  return 'Deadpool';
}
