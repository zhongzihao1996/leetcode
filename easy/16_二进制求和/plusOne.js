/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 先补齐位数
  let abs_len = Math.abs(a.length - b.length);
  while (abs_len > 0) {
    if (a.length > b.length) {
      b = '0' + b;
    } else {
      a = '0' + a;
    }
    abs_len--;
  }
  let c = '';
  // 进位 0  或者  1
  let over_byte = 0;
  // 从尾部开始遍历
  // 每次遍历后都重置进位
  let end = a.length - 1;
  while (end >= 0) {
    // 位数相加并且加上进位
    let count = Number(a[end]) + Number(b[end]) + over_byte;
    // 有进位
    if (count >= 2) {
      // 取模
      c = String(count % 2) + c;
      over_byte = 1;
      // 处理最后一位
      if (end === 0) {
        c = '1' + c;
      }
    } else {
      c = String(count) + c;
      over_byte = 0;
    }
    end--;
  }
  return c;
};
