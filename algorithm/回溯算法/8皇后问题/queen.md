# 回溯算法之八皇后问题

## 八皇后问题

> 在 8×8 格的国际象棋上摆放八个皇后，使其不能互相攻击，即任意两个皇后都不能处于同一行、同一列或同一斜线上，问有多少种摆法。

![](./lib/QQ截图20200529182326.png)

## 回溯算法

> 回溯算法实际上一个类似枚举的搜索尝试过程，主要是在搜索尝试过程中寻找问题的解，当发现已不满足求解条件时，就“回溯”返回，尝试别的路径。

回溯算法和穷举法很像，都是树的深度优先遍历，但回溯法会进行'剪枝'，比如第 5 层某 i 叶子结点时发现该节点已经无意义，会直接跳过该节点下面的遍历，提高了效率

## 求解

不考虑限制条件，问题变成了排列组合，一共有 **C64 取 8(22307873454720)种**

分析该问题，问题可以拆解为:

- 从 64 个格子中取 8 个格子放入 8 个皇后
- 限制条件：**任意两个皇后都不能处于同一行、同一列或同一斜线上**

我们用一个二维矩阵来记录皇后的位置和状态,其中 1 表示该位置已经有皇后了

```bash
let num = 8;
for (let i = 0; i < num; i++) {
  this.arr[i] = [];
  for (let j = 0; j < num; j++) {
    this.arr[i][j] = 0;
  }
}
// 横轴表示 i 行，纵轴表示第 j 列
//   1  2  3  4  5  6  7  8
1  [ 0, 0, 0, 0, 0, 0, 0, 0 ], # （0,0) 表示第一行第一列  （0,1) 表示第一行第二列
2  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
3  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
4  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
5  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
6  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
7  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
8  [ 0, 0, 0, 0, 0, 0, 0, 0 ]
```

基本步骤如下:

0. 一个检查函数，确定该位置不会与其他皇后有冲突
1. 从第一行开始，8 列中任意选一个列执行步骤 0，若安全则开始放第二行........直到放到第八行若有位置，则已经找到一个解输出；若第 i 行的操作中没有位置可以放入皇后回退回第 i-1 行的操作，若 i=0 即第一行则说明已经执行完毕程序结束

用递归可以很容易的实现，什么是递归？看下面这个斐波那契数列，就是一个很简单的递归,递归有两个很重要的特点:一个结束条件，不断调用自身。

```bash
recurFib(n) {
  if (n < 2) return n;
  return this.recurFib(n - 1) + this.recurFib(n - 2);
}
// 栈是一种先进后出的数据结构,先压进栈的最后出栈
n = 3时
1.recurFib(3)压入执行栈，执行到 recurFib(2) + recurFib(1),recurFib(2)被压入执行栈中
2.recurFib(2)执行，执行到 recurFib(1) + recurFib(0)，recurFib(1)被压入执行栈中
recurFib(1)执行，返回1；recurFib(1)执行完出栈
继续执行recurFib(2), 1 + recurFib(0)，recurFib(0)压入执行栈中
recurFib(0)执行，返回1；recurFib(0)执行完出栈
继续执行recurFib(2)，1 + 1，返回2，recurFib(2)执行完出栈
3.继续执行recurFib(3)，执行到 2 + recurFib(1)，recurFib(1)被压入执行栈中
recurFib(1)执行，返回1；recurFib(1)执行完出栈
继续执行recurFib(3)，2 + 1 ，返回 3，栈已经清空，程序结束
```

回到 8 皇后问题,关键代码如下:

```bash
buildList(list, row) {
  // 递归中止条件,找到一个解缓存起来
  if (row === list.length) {
    this.result.push(JSON.parse(JSON.stringify(list)));
    return;
  }
  for (let col = 0, len = list.length; col < len; col++) {
    if (this.isSafe(list, row, col)) {
      list[row][col] = 1;
      this.buildList(list, row + 1);
      // 走到这里，说明该次递归已经结束，不管找没找到，都需要重置,继续找下一个可放置的位置
      list[row][col] = 0;
    }
  }
}
```

isSafe 方法，确保该行该列不会与其他皇后冲突:

![](./lib/QQ截图20200531175932.png)

```bash
isSafe(list, row, col) {
  const len = list.length;
  // 同一列
  for (let i = 0; i < len; i++) {
    if (list[i][col] === 1) return false;
  }
  // 斜右上方
  for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
    if (list[i][j] === 1) return false;
  }
  // 斜左上方
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (list[i][j] === 1) return false;
  }
  return true;
}
```

**完整代码**

```bash
class Queen {
  constructor(num) {
    this.num = num;
    this.arr = [];
    this.result = [];
    this.initList();
    this.buildList(this.arr, 0);
  }

  initList() {
    let num = this.num;
    for (let i = 0; i < num; i++) {
      this.arr[i] = [];
      for (let j = 0; j < num; j++) {
        this.arr[i][j] = 0;
      }
    }
    console.log(this.arr);
  }

  buildList(list, row) {
    // 递归中止条件,找到一个解缓存起来
    if (row === list.length) {
      this.result.push(JSON.parse(JSON.stringify(list)));
      return;
    }
    for (let col = 0, len = list.length; col < len; col++) {
      if (this.isSafe(list, row, col)) {
        list[row][col] = 1;
        this.buildList(list, row + 1);
        // 走到这里，说明该次递归已经结束，不管找没找到，都需要重置
        list[row][col] = 0;
      }
    }
  }

  isSafe(list, row, col) {
    const len = list.length;
    // 同一列
    for (let i = 0; i < len; i++) {
      if (list[i][col] === 1) return false;
    }
    // 斜右上方
    for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
      if (list[i][j] === 1) return false;
    }
    // 斜左上方
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (list[i][j] === 1) return false;
    }
    return true;
  }
}
const queen = new Queen(8);
console.log(queen.result);
```

---

## 优化

其实解法跟之前一样，上面用了二维矩阵来记录位置，因为已经确定同一行不可能存在 2 个皇后实际上只用一维数组就表示：list[row] = col;减少空间消耗

isSafe 判断和之前不同

```bash
isSafe(row) {
  for (let i = 0; i < row; i++) {
    // 判断列
    if (this.arr[i] === this.arr[row]) return false;
    // 判断对角线
    if (Math.abs(this.arr[row] - this.arr[i]) === row - i) return false;
  }
  return true;
}
```

完整代码

```bash
class Queen {
  constructor(num) {
    this.num = num;
    this.arr = [];
    this.result = [];
    this.initList();
    this.buildList(0);
  }

  initList() {
    let num = this.num;
    for (let i = 0; i < num; i++) {
      this.arr[i] = 0;
    }
  }

  buildList(row) {
    // 递归中止条件,找到一个解缓存起来
    if (row === this.num) {
      this.result.push(JSON.parse(JSON.stringify(this.arr)));
      return;
    }
    for (let col = 0; col < this.num; col++) {
      this.arr[row] = col;
      if (this.isSafe(row)) {
        this.buildList(row + 1);
      }
    }
  }

  isSafe(row) {
    for (let i = 0; i < row; i++) {
      // 判断列
      if (this.arr[i] === this.arr[row]) return false;
      // 判断对角线
      if (Math.abs(this.arr[row] - this.arr[i]) === row - i) return false;
    }
    return true;
  }
}

const queen = new Queen(8);
console.log(queen.result);
```

---

END

跑一下，可知 8 皇后问题一共有 92 种摆法

![](./lib/QQ截图20200531181648.png)

尝试跑了一下 n=16 的情况，cpu 直接燃烧，几分钟没出结果，果断放弃......
可见递归有多么耗性能~~
