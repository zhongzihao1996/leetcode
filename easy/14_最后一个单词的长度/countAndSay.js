/**
 * @param {string} s
 * @return {number}
 */
// 双指针扫描
// 从末尾开始扫描
var lengthOfLastWord = function (s) {
  let end = s.length - 1;
  // 先过滤末尾的空格
  while (end >= 0 && s[end] === ' ') end--;
  // 都是空格 直接返回
  if (end < 0) return 0;
  let start = end;
  while (start >= 0 && s[start] !== ' ') start--;
  return end - start;
};
