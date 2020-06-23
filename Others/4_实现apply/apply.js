Function.prototype.apply_ = function (context, args) {
  let context_ = context || window;
  // 让 fn 的上下文为 context
  context_.fn = this;
  let param_ = args || [];
  const result = context_.fn(param_);
  delete context_.fn;
  args;
  return result;
};

function test(a) {
  console.log(this.test, a);
}
test.apply_({ test: 22 }, [1, 2, 3]);
