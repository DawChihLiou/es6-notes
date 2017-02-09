/*
 * HTML structure
 * <p>Hi I'm p 01</p>
 * <p>Hi I'm p 02</p>
 * <p>Hi I'm p 03</p>
 * <p>Hi I'm p 04</p>
 * <p>Hi I'm p 05</p>
 * <p>Hi I'm p 06</p>
 * <p>Hi I'm p 07</p>
 * <p>Hi I'm p 08</p>
 * <p>Hi I'm p 09</p>
 * <p>Hi I'm p 10</p>
 */

const ps = document.querySelectorAll('p');

for (const paragraph of ps) {
  paragraph.addEventListener('click', function () {
    console.log(this.textContent);
  });
}
