/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 去除非单词 下划线
  const str = s.replace(/(\W|_)*/g, '').toLowerCase()
  return str === str.split('').reverse().join('').toLocaleLowerCase();
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));