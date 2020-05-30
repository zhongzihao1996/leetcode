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
      if (this.isSafe(row)) {
        this.arr[row] = col;
        this.buildList(row + 1);
        this.arr[row] = -1;
      }
    }
  }

  isSafe(row) {
    for (let i = 0; i < row; i++) {
      if (this.arr[i] === this.arr[row]) return false;
      if (Math.abs(this.arr[row] - this.arr[i]) === row - i) return false;
    }
    return true;
  }
}

const queen = new Queen(8);
console.log(queen.result.length);
