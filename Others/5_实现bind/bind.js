Function.prototype.bind_ = function (context, ...args) {
  let fn = this;
  return function () {
    fn.apply(context, args.concat(...arguments));
  };
};

function test(a, b) {
  console.log(this);
  console.log(a);
  console.log(b);
}
test.bind_({ test: 22 }, [1, 2, 3])(4);
