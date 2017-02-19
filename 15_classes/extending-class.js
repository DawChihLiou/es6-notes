class Video {
  constructor (name) {
    this.name = name;
    this.media = [];
  }
  distribute (platform) {
    this.media.push(platform);
    return this.media;
  }
}

class Movie extends Video {
  constructor (name, publisher) {
    super(name);
    this.publisher = publisher;
  }
  play () {
    console.log(`Playing ${this.name}`);
  }
}

const newGirl = new Video('New Girl');
const deadpool = new Movie('Deadpool', 'Marvel Comics');

newGirl.distribute('hulu');
console.log(newGirl.media);

deadpool.distribute('AMC');
deadpool.distribute('Century San Francisco Centre 9 and XD');
console.log(deadpool.media);
