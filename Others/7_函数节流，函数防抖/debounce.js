/** 函数防抖(debounce) : 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。
 *
 * @param {*} fn
 * @param {*} wait
 */
function debounce(fn, wait) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

const console_ = () => {
  console.log(123);
};
const test = debounce(console_, 1000);
test();
test();
test();