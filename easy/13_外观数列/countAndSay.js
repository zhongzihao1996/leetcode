/**
 * @param {number} n
 * @return {string}
 */
// 双指针法
var countAndSay = function (n) {
  if (n === 1) return '1';
  const prev = countAndSay(n - 1);
  let str = '';
  let left = 0;
  let right = 0;
  while (right < prev.length) {
    // 找到边界  数字不同即为边界
    while (prev[left] === prev[right] && right < prev.length) {
      right++;
    }
    str += String(right - left) + prev[left];
    left = right;
  }
  return str;
};
