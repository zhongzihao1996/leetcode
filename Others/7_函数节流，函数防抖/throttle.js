/** 函数节流：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
 * 
 * @param {*} fn 
 * @param {*} wait 
 */
// 方法一 定时器版
function throttle(fn, wait) {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, wait);
  };
}
// 方法二 时间差
function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const context = this;
    const now = +new Date();
    if (now - last > delay) {
      last = now;
      fn.apply(context, args);
    }
  };
}

const console_ = () => {
  console.log(123);
};
const test = throttle(console_, 1000);
test();
test();
test();
