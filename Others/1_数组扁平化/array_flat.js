/** 数组扁平化
 *
 * @param {*} arr
 */

// 解法一：flat
const flatArray = (arr) => arr.flat(Infinity);

// 解法二：正则
const regArray = (arr) => {
  let str = JSON.stringify(arr);
  let reg = /[\[\]]/g;
  str = str.replaceAll(reg, '');
  return JSON.parse(`[${str}]`);
};

// 解法三：递归
const recursionArray = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...recursionArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

const array = [1, [2, [3, [4, 5]]], 6];
console.log(flatArray(array));
console.log(regArray(array));
console.log(recursionArray(array));
