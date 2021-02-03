/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 旋转后：row = col;col = n - 1 - row;
var rotate = function (matrix) {
  const len = matrix.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < Math.floor((len + 1) / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[len - 1 - j][i];
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
      matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i];
      matrix[j][len - 1 - i] = temp;
    }
  };
  return matrix;
};

console.log(rotate([
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]));
console.log(rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]));