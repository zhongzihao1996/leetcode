




// 基本背包算法，求最大值
function knapsack(weights, values, W) {
  let n = weights.length;
  let f = new Array(n);
  //解決0边界
  f[-1] = new Array(W + 1).fill(0)
  for (let i = 0; i < n; i++) {
    f[i] = new Array(W).fill(0)
    for (let j = 0; j <= W; j++) {
      if (j < weights[i]) {
        f[i][j] = f[i - 1][j]
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i]);
      }
    }
  }
  let select = [];
  let j = W;
  let w = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (f[i][j] > f[i - 1][j]) {
      select.push(`物品${i}  其重量为${weights[i]}  "其价格为"${values[i]}`);
      //背包剩余容量
      j = j - weights[i];
      //已放的容量
      w += weights[i]
    }
  }
  console.log(select)
  console.log("背包最大承重为:", W, " 现在重量为:", w, " 总价值为:", f[n - 1][W])

  // return f[n - 1][W]
  //删除0边界
  delete f[-1]
  return f;
}
let w = 11;
let weight = [4, 2, 2, 5, 6];
let value = [6, 3, 9, 4, 6];
knapsack(weight, value, w);