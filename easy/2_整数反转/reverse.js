/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  var max_num = Math.pow(2, 31);
  var min_num = Math.pow(-2, 31);
  var result = String(Math.abs(x)).split('').reverse().join('');
  Math.sign(x) >= 0 ? (result = result) : (result = -result);
  if (result > max_num || result < min_num) {
    return 0;
  } else {
    return result;
  }
};