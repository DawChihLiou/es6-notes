/**
 * Count number of clicks for each button
 *
 * HTML Structure
 *  button Deadpool
 *  button Captain America
 *  button Ant-Man
 *  button Doctor Strange
 *  button Wonder Woman
 */
const clickCounts = new Map();
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  // set button DOM object as a key
  clickCounts.set(button, 0);

  button.addEventListener('click', function () {
    // reference the button object itself
    const val = clickCount.get(this);

    clickCounts.set(this, val + 1);
    console.log(clickCounts);
  })
});
