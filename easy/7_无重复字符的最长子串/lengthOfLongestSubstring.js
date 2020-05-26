/**
 * @param {string} s
 * @return {number}
 */
// set所有元素都不同
var lengthOfLongestSubstring = function (s) {
  if (!s || !s.length) return 0;
  const set = new Set();
  const len = s.length;

  let end = 0; // 重复字符出现的位置
  let result = 0;
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      set.delete(s.charAt(i - 1));
    }
    while (end < len && !set.has(s.charAt(end))) {
      set.add(s.charAt(end));
      ++end;
    }
    console.log(set);
    result = Math.max(result, set.size);
  }
  return result;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
