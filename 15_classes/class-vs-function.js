/*
 * Class declaration
 */
class Movie {
  constructor (name) {
    this.name = name;
  }
  play () {   
    console.log(`Playing my favorite movie ${ this.name }!`)
  }
  // static function
  static info () {
    console.log(`Movies are awesome!`)
  }
  // getter
  get boxoffice () {
    return this.box;
  }
  // setter
  set boxoffice (boxoffice) {
    this.box = boxoffice;
  }
}

const deadpool = new Movie('Deadpool')
console.log(deadpool.play()) // Playing my favorite movie Deadpool!

// call static function
console.log(deadpool.info()) // TypeError: deadpool.info is not a function
console.log(Movie.info())    // Movies are awesome!

// call getter and setter
console.log(deadpool.boxoffice)
deadpool.boxoffice = '700 million usd';
console.log(deadpool.boxoffice)

/*
 * Creating object with function constructor
 */
function Movie (name) {
  this.name = name
}

Movie.prototype.play = function () {
  console.log(`Playing my favorite movie ${ this.name }!`)
}

const deadpool = new Movie('Deadpool')
console.log(deadpool.play()) // Playing my favorite movie Deadpool!
