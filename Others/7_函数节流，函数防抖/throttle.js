/**
 * 函数节流：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
 */
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
