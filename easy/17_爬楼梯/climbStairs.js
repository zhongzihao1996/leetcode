/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let p = 0;
  let q = 0;
  let num = 1;
  for (let i = 1; i <= n; i++) {
    p = q;
    q = num;
    num = p + q;
  }
  return num;
};
