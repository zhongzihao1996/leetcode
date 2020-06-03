/**
 *  01背包问题
 *  有N件物品和一个容量为V的背包。第i件物品的体积是c[i]，价值是w[i]。求解将哪些物品装入背包可使价值总和最大
 *
 * f[i][v]=max{f[i-1][v],f[i-1][v-c[i]]+w[i]}
 */
class Knapsack {
  constructor(product, capacity) {
    this.product = product; // 物品 [{weight:1,value:1}]......
    this.capacity = capacity; // 背包容量
    this.result = [];
    this.init();
  }
  // 初始化一个 product.length+1 *  capacity+1的矩阵
  init() {
    const row = this.product.length;
    const col = this.capacity;
    // 解決0边界
    this.result[-1] = new Array(col + 1).fill(0);
    for (let i = 0; i < row; i++) {
      this.result[i] = new Array(col + 1).fill(0);
    }
  }
  calculate() {
    const row = this.product.length;
    const col = this.capacity;
    let product;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col + 1; j++) {
        product = this.product[i];
        if (j < product.weight) {
          this.result[i][j] = this.result[i - 1][j];
        } else {
          this.result[i][j] = Math.max(
            this.result[i - 1][j],
            this.result[i - 1][j - product.weight] + product.value
          );
        }
      }
    }
    // delete this.result[-1];
    return this.result[row - 1][col];
  }
}

const product = [
  { weight: 2, value: 3 },
  { weight: 2, value: 6 },
  { weight: 6, value: 5 },
  { weight: 5, value: 4 },
  { weight: 4, value: 6 },
];
const capacity = 10;
const knapsack = new Knapsack(product, capacity);
console.log(knapsack.calculate());
console.log(knapsack.result);
