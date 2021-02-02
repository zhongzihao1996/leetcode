/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;
  const clone_matrix = new Array(len).fill(0).map(() => new Array(len).fill(0));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      clone_matrix[j][len - i - 1] = matrix[i][j]
    }
  };
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = clone_matrix[i][j];
    }
  }
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