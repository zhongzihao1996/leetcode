// 基本背包算法，求最大值
function knapsack(weights, values, W) {
  let n = weights.length;
  let f = new Array(n);
  //解決0边界
  f[-1] = new Array(W + 1).fill(0);
  for (let i = 0; i < n; i++) {
    f[i] = new Array(W).fill(0);
    for (let j = 0; j < W + 1; j++) {
      if (j < weights[i]) {
        f[i][j] = f[i - 1][j];
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i]);
      }
    }
  }
  delete f[-1];
  return f;
}

const w = 11;
const weight = [4, 2, 2, 5, 6];
const value = [6, 3, 9, 4, 6];
console.log(knapsack(weight, value, w));
