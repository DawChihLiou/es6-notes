const lalaland = {
  release: 2016,
  director: 'Damien Chazelle',
  boxOffic: '226.5 million USD'
};

/*
 * cannot apply for-of loop on object yet. use for-in loop
 */
for (const prop in lalaland) {
  const value = movie[prop];
  console.log(`${prop} is ${value}`);
}
