Function.prototype.call_ = function (context, ...args) {
  let context_ = context || window;
  // 让 fn 的上下文为 context
  context_.fn = this;
  const result = context_.fn(...args);
  delete context_.fn;
  return result;
};

function test(a, b, c) {
  console.log(this.test, a, b, c);
}
test.call_({ test: 22 }, 1, 2, 3);
