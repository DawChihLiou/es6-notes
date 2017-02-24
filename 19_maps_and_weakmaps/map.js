/**
 * Map can be seen as collection of unique objects 
 */
const movieRatings = new Map();

movieRatings.set('La La Land', 5);
movieRatings.set('Deadpool', 5);
movieRatings.set('The Girl on The Train', 4);

console.log(movieRatings.get('Deadpool')) // 5

movieRatings.delete('The Girl on The Train') // true

console.log(movieRatings) // Map {"La La Land" => 5, "Deadpool" => 5

for (const [key, val] of movieRatings)
  console.log(key, val);
