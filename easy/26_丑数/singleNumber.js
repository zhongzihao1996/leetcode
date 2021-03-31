/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
  const arr = [2,3,5,6,10,15];
  return arr.some(item => n%item === 0);
};