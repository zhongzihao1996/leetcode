/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  const len1 = haystack.length;
  const len2 = needle.length;
  for (let i = 0; i < len1 - len2 + 1; ++i) {
    if (haystack.substring(i, len2 + i) === needle) return i;
  }
  return -1;
};
