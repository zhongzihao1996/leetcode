/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 从尾部开始扫描
  let end = digits.length - 1;
  while (end >= 0) {
    // 若有进位，开始算下一个进位
    if (digits[end] + 1 >= 10) {
      digits[end] = 0;
      end--;
    } else {
      // 没有进位，直接结束
      digits[end] = digits[end] + 1;
      break;
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
};
