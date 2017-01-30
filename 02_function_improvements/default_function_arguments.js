/*
 * Default function arguments check if arguments are undefined. If yes, apply default
 * values.
 */ 
function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100, , 0.25); // SyntaxError
const totalBill = calculateBill(100, undefined, 0.25); // 138
