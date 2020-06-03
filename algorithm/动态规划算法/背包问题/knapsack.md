# 动态规划

> 动态规划算法是通过拆分问题，定义问题状态和状态之间的关系，使得问题能够以递推（或者说分治）的方式去解决。

## 01 背包问题

> 有 N 件物品和一个容量为 V 的背包。第 i 件物品的体积是 c[i]，价值是 w[i]。求解将哪些物品装入背包可使价值总和最大（每一种物品只能放一次）

## 分析解答

也不多扯皮，直入正题。

先看一个简单的问题，斐波那契数列：

```bash
dynFib(n) {
  let arr = new Array(n).fill(0);
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  // 返回最后一个
  return arr[n - 1];
}
```

该问题就是一个简单的动态规划问题,关键点在于找到状态关系: f(n) = f(n-1) + f(n-2);

回到背包问题，可以参考上面斐波那契数列的递推关系，

假设现在背包容量为 10，有一个物品数组:

```bash
const product = [
  { weight: 2, value: 3},
  { weight: 2, value: 6 },
  { weight: 6, value: 5 },
  { weight: 5, value: 4 },
  { weight: 4, value: 6 },
];
```

如果背包容量为 0，那么什么也放不下

如果背包容量为 1，还是什么也放不下

如果背包容量为 2，有两个物品都为质量都为 2，该放哪一个呢？

这时需要做一个决策，先放物品 1，此时价值为 3；此时比较 **上一个决策的价值 - 物品 1 的价值 + 放物品 2 的价值** 和物品 1 的价值比，取大的当做该容量下的最优解

用状态方程描述为： **f[i][j]= Math.max(f[i-1][j],f[i-1][j]-c[i]]+w[i])**; 其中 i 为第 i 件物品（0 开始）, j 为当前背包容量

如果背包容量为 3，.......

......

直到背包容量为 10，得到此时的最优解

---

初始化一个二维矩阵来记录背包和价值的关系:

```bash
this.result = [];

const row = this.product.length;
const col = this.capacity;
for (let i = 0; i < row; i++) {
  this.result[i] = new Array(col + 1).fill(0);
}
```

我们会发现，每一个状态都依赖于上一个状态，第一个物品需要比较没有物品的状态做比较，我们需要对 i=0 时做特殊处理，还有一个更巧妙的方法，初始化一个 -1 的状态:

```bash
this.result[-1] = new Array(col + 1).fill(0);
```

如下图，我们发现类似于填表的方式，右下角即为背包最大容量时的价值;

观察下表可以发现，该矩阵记录了每一个容量即状态的最优解，比如容量 7 时的最优解，我们可以找到 7 那一列最下面即 12;

![](./lib/QQ截图20200603153809.png)

主函数部分,利用状态方程**进行最优决策**，

```bash
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
  delete this.result[-1];
  return this.result[row - 1][col];
}
```

动态规划解决问题主要是两个:

- 拆分、划分问题到某个颗度时，我们可以很轻易的做出决策
- 确定状态方程，比如上面的: **f[i][j]= Math.max(f[i-1][j],f[i-1][j]-c[i]]+w[i])**

## 完整代码

```bash
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
```

--- END
