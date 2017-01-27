/*
 * var is function scoped
 */ 
function getLalaland () {
  var lalaland = 'La La Land is awesome';
}

console.log(lalaland); // undefined

/*
 * const/let is block scoped
 */
{
  let lalaland = 'La La Land is awesome';
}

console.log(lalaland); // undefined

/*
 * let doesn't allow re-declaration
 */
{
  let lalaland = 'La La Land';
  let lalaland = 'Nothing like it'; 
  // Uncaught SyntaxError: Identifier 'lalaland' has already been declared
}

/*
 *  Can define let/const with the same name in different scope
 */
{  
  const lalaland = 'La La Land';
  
  {
    const lalaland = 'Nothing like it';
    console.log(lalaland) // Nothing like it
  }

  console.log(lalaland) // La La Land
}
