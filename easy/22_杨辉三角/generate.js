/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  const result = [];
  for (let i = 0; i < numRows; i++) {
    // 前两行都为1
    let temp_list = new Array(i + 1).fill(1);
    // 第三行开始
    for (let j = 1; j < i; j++) {
      if (j !== 0 || j !== i) {
        temp_list[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
    result.push(temp_list);
  }
  return result;
};

console.log(generate(5));