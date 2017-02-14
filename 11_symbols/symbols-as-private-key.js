const movie = {
  [Symbol('La La Land')] : { review: 5, release: 2016 },
  [Symbol('Deadpool')] : { reivew: 4, release: 2016 },
  [Symbol('The Accountant')]: {review: 3, release: 2016}
};

// Symbol keys are private. Simple for loop doesn't iterate through them
const syms = Object.getOwnPropertySymbols(movie);
const data = syms.map(sym => movie[sym]);

console.log(data) // [{..}, {..}, {..}]
