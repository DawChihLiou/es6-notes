function* movies () {
  yield `La La Land`;
  yield `Deadpool`;
  yield `Ant-Man`;
  yield `The Accountant`;
  yield `The Girl on The Train`;
  yield `Beautiful Mind`;
  yield `The Grand Budapest Hotel`;
}

const movieGenerator = movies();

for (const movie of movieGenerator) {
  console.log(movie);
}
