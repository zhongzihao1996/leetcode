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
  }

  buildList(list, row) {
    // 递归中止条件,找到一个解缓存起来
    if (row === list.length) {
      this.result.push(list);
      return;
    }
    for (let col = 0, len = list.length; col < len; col++) {
      if (!this.isSafe(list, row, col)) continue;
      list[row][col] = 1;
      this.buildList(JSON.parse(JSON.stringify(list)), row + 1);
      // 当前行列递归已经结束重置//回溯
      list[row][col] = 0;
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

const queen = new Queen(4);
console.log(queen.result);
