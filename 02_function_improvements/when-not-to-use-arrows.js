/*
 * In general, use arrow funciton when you don't concern about 'this', or you want
 * this to bind with parent scope.
 */
// when you need 'this' to bind to event target
const box = document.querySelector('.box');
box.addEventListener('click', () => {
  console.log(this) // Window
});

// when you need to bind a method to an object
const movie = {
  name: 'La La Land',
  review: () => {
    // it doesn't work properly
    console.log(`I love ${ this.name }`); // I love 
  }
  realReview () {
    console.log(`I love ${ this.name }`) // I love La La Land
  }
}

// when you need to add a prototype method
class Movie {
  constructor (name, stars) {
    this.name = name;
    this.stars = stars;
  }
}
Movie.prototype.summarize = () => {
  return `Movie ${ this.name } is a awesome film with ${ this.stars } stars!`;
};

const lalaland = new Movie('La La Land', 5);
console.log(lalaland.summarize()); // Movie  is a awesome file with  stars!

// when you need arguments object
const movies = () => {
  console.log(arguments);
}
console.log(movies('La La Land', 'Antman', 'Deadpool')); 
// ReferenceError: arguments is not defined
