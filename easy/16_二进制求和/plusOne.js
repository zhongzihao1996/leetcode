/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
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
  let end = a.length - 1;
  let over_byte = 0;
  while (end >= 0) {
    let count = Number(a[end]) + Number(b[end]) + over_byte;
    if (count >= 2) {
      c = String(count % 2) + c;
      over_byte = 1;
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
