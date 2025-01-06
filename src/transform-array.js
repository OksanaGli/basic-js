const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let res = [...arr]; 

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '--double-next') {
      if (i + 1 < res.length) {
        res.splice(i, 1, res[i + 1]); 
      } else {
        res.splice(i, 1); 
        i--;
      }
    } else if (res[i] === '--double-prev') {      
      if (i - 1 >= 0 && res[i - 2] !== '--discard-next') {
        res.splice(i, 1, res[i - 1]); 
      } else {
        res.splice(i, 1); 
        i--;
      }
    } else if (res[i] === '--discard-next') {
      if (i + 1 < res.length) {
        res.splice(i, 2); 
        i--;
      } else {
        res.splice(i, 1);
      }
    } else if (res[i] === '--discard-prev') {
      if (i - 1 >= 0 && res[i - 2] !== '--discard-next') {
        res.splice(i - 1, 2); 
        i--;
      } else {
        res.splice(i, 1); 
      }
    }
  }

  return res;
}

module.exports = {
  transform
};
