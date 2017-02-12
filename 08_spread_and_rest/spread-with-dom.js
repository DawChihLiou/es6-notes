/*
 * Spread text in seperate spans
 *
 * See the exercise with css on codepen
 *  http://codepen.io/DawChihLiou/pen/XpoKdM
 *
 * DOM structure
 *  <h1 class="head">SPREADS!</h1>
 */
const head = document.querySelector('.head');
head.innerHTML = spreadWord(head.textContent);

function spreadWord (word) {
  return [ ...word ].map(letter => `<span>${ letter }</span>`).join('');
}

