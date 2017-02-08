/*
 * destructuring settings object with default value for undefined properties (in 
 * settings object)
 */
const settings = { width: 300, color: 'black' };
const { width = 100, height = 100, color = 'blue', fontsize = 25} = settings;

/*
 * destructuring object with default values and renaming
 */
const { w: width = 400, h: height = 500 } = { w: 800 }
console.log(width, height) // 800 500
