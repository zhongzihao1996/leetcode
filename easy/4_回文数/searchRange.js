/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  /** 解法一 字符串暴力对比 */
  // if (x < 0) return false;
  // const is_palindrome = String(x).split('').reverse().join('') === String(x);
  // return is_palindrome;

  /** 解法二 对半首位对比 */
  if (x < 0) return false;
  let n = 10 ** Math.floor(Math.log10(x)); // 最高位数量级
  while (n > 1 && x > 0) {
    // x % 10 末位   Math.floor(x / n) 首位
    if (x % 10 !== Math.floor(x / n)) return false;
    // 去掉首尾 
    x = Math.floor((x % n) / 10); 
    n /= 100;
  }
  return true;
};