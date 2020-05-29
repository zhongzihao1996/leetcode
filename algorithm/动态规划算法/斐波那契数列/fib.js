// 1、1、2、3、5、8、13、21、34、......,

class Fib {
  constructor() {}

  /**
   * 递归
   *
   * @param {*} n
   */
  recurFib(n) {
    if (n < 2) {
      return n;
    } else {
      return this.recurFib(n - 1) + this.recurFib(n - 2);
    }
  }

  /**
   * 动态规划
   *
   * @param {*} n
   */
  dynFib(n) {
    let arr = new Array(n).fill(0);
    arr[0] = 1; // 可以省略的
    arr[1] = 1;
    for (let i = 2; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    // 返回最后一个
    return arr[n - 1];
  }
}

const fib = new Fib();

console.time('Fib');
console.log(fib.recurFib(40));
console.timeEnd('Fib');

console.time('Fib');
console.log(fib.dynFib(40));
console.timeEnd('Fib');
