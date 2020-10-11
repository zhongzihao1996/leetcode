/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let default_str = strs[0];
  for (let i = 1; i < strs.length; i++) {
    default_str = findCommonStr(default_str, strs[i]);
    if (default_str.length === 0) break;
  }
  return default_str;
};

function findCommonStr(first_str, second_str) {
  let str = '';
  for (let i = 0; i < first_str.length; i++) {
    if (first_str[i] !== second_str[i]) break;
    str += first_str[i];
  }
  return str;
}
