/**
 * 最少硬币找零问题  递归解法
 *
 */
// 递归，找到1的最优解，再找到2的最优解，以此类推......
class Coin {
  constructor(coins_list) {
    this.cache = {};
    this.coins_list = coins_list;
  }

  makeChange(amount) {
    if (!amount || amount <= 0) return [];
    if (this.cache[amount]) return this.cache[amount];
    let result_list = []; // 最终结果数组
    let current_list = []; // 当前金额的最优解
    for (let i = 0, len = this.coins_list.length; i < len; i++) {
      // 递归 有找零时继续找，直到找到当前金额的最优解
      let new_amount = amount - this.coins_list[i];
      if (new_amount >= 0) {
        current_list = this.makeChange(new_amount);
      }
      // 判断是否是当前金额的最优解
      // [1,1] [2] 选少的那个
      // 执行到金额 2时，第一次为 f(1) + coin[0] = [1,1];第二次为 f(0) + coin[1] = [2]
      if (
        new_amount >= 0 &&
        // 当前金额的最优解 比当前结果集少2  或者刚初始化
        (current_list.length < result_list.length - 1 || !result_list.length) &&
        // 当前金额最优解不为空  或者刚初始化
        (current_list.length || new_amount === 0)
      ) {
        result_list = current_list.concat([this.coins_list[i]]);
      }
    }
    // 缓存起来
    this.cache[amount] = result_list;
    return this.cache[amount];
  }
}

const coin = new Coin([1, 2, 5, 10, 20]);
console.log(coin.makeChange(25));
console.log(coin.cache);
