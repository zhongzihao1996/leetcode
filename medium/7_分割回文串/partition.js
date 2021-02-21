/**
 * @param {string} s
 * @return {string[][]}
 */
// 回溯算法
var partition = function (s) {
  if (s.length === 0) return [];
  let result = [];
  backtracking(s, 0, [], result);
  return result;
};

const backtracking = (str, start, path, result) => {
  if (start === str.length) {
    result.push(path);
    return;
  }
  for (let i = start; i < str.length; i++) {
    let curr_str = str.slice(start, i + 1);
    // 剪枝
    if (isPalindrome(curr_str)) {
      backtracking(str, i + 1, [...path, curr_str], result);
    }
  }
};

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
};


console.log(partition('aabaabaabaabaabaabaabaabbaabaab'));