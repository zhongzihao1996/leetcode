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

console.log(maxProfit([7, 1, 5, 3, 6, 4]));