/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法解决
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};
// 动态规划
var maxProfit_ = function (prices) {
  if (prices.length <= 1) return 0;
  const len = prices.length;
  const result = new Array(len).fill(0).map((item) => new Array(2).fill(0));
  // 0 当前天没有股票
  result[0][0] = 0;
  // 1 当前买进股票
  result[0][1] = -prices[0];
  for (let i = 1; i < len; i++) {
    result[i][0] = Math.max(result[i - 1][0], result[i - 1][1] + prices[i]);
    result[i][1] = Math.max(result[i - 1][1], result[i - 1][0] - prices[i]);
  }
  // 最后一天不会再买进股票了
  return result[len - 1][0];
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit_([7, 1, 5, 3, 6, 4]));