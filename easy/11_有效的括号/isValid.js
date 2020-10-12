/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  let stack = [];
  const str_map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (str_map.has(s[i])) {
      if (!stack.length) return false;
      if (stack[stack.length - 1] !== str_map.get(s[i])) return false;
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
};
