/*
 * HTML Structure
 *  div(class="movie")
 */

const dict = {
  'La La Land': 'Amazing movie in 2016',
  'Deadpool': 'Funny movie in 2016',
  'Antman': 'Kinda nice to watch in 2016'
};

function addAbbreviations(strings, ...value) {
  const abbreviated = value.map(value => {
    if (dict[value]) {
      return `<abbr title="${dict[value]}">${value}</abbr>` 
    }
    return value;
  });

  return strings.reduce((sentence, string, i) => {
    return sentence + string + (abbreviated[i] || '');
  },'');
}

const first = 'Daw-Chih';
const last = 'Liou';
const sentence = addAbbreviations`Hi my name is ${first} ${last} and I enjoy watching ${'La La Land'}, ${'Deadpool'}, and ${'Antman'}. For real!`

const movie = document.querySelector('.movie');
const p = document.createElement('p');

p.innerHTML = sentence;
movie.appendChild(p);
