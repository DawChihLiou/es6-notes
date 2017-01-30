/*
 * HTML Structure:
 *  div
 *    div(class='box')
 *
 * 'this' keyword inherited from the parent scope!
 */ 
const box = document.querySelector('.box');

/* 
 * declare the callback function with function bound 'this' to the box object,
 * which is what we what.
 */
box.addEventListener('click', function () {
  console.log(this) // <div class="box">
  
  /*
   * create a new function that 'this' is not bound to anything
   */
  setTimeout(function () {
    console.log(this) // Window {...}
  }, 500);

  /*
   * 'this' inherits from box object, the parent scope.
   */ 
  setTimeout(() => {
    console.log(this) // <div class="box">
  }, 500);
});

/*
 * arrow function doesn't bound this to the box object, it inherits from the 
 * parent, which is the Window object.
 */ 
box.addEventListener('click', () => {
  console.log(this) // Window {...}
});
