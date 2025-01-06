const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let isTrue = [true, true, true, true];
   for (let i = 0; i < matrix.length; i += 1 ) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (isTrue[j]) { 
        if (matrix[i][j] === 0) {
          isTrue[j] = false; 
        } else {
          sum += matrix[i][j]; 
        }
      }
    }
  }
  return sum; 
}

module.exports = {
  getMatrixElementsSum
};
