/* 
 * Assign default values to deconstructured variables.
 * Assign default value to argument
 */
function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
  return total + (tip * total) + (tax * total);
}

const bill = tipCalc(); // 128
