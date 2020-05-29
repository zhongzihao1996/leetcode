/**
 * 数组扁平化
 *
 *
 *
 */
let arr = [1, [2, [3, [4, 5]]], 6];

// 解法一：flat
(function (arr) {
  arr = arr.flat(Infinity);
  console.log(arr);
})(arr);

// 解法二：正则
(function (arr) {
  let str = JSON.stringify(arr);
  str = str.replace(/[\[\]]/g, '');
  str = JSON.parse(`[${str}]`);
  console.log(str);
})(arr);

// 解法三：递归
(function (arr) {
  let result = [];
  (function repeat(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (Array.isArray(arr[i])) {
        repeat(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  })(arr);
  console.log(result);
})(arr);
