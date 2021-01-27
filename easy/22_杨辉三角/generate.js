/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let temp_list = [];
    if (i === 0) {
      temp_list = [1];
    } else if (i === 1) {
      temp_list = [1, 1];
    } else {
      temp_list = new Array(i + 1);
      for (let j = 0; j < temp_list.length; j++) {
        if (j === 0 || j === temp_list.length - 1) {
          temp_list[j] = 1;
        } else {
          temp_list[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
      }
      console.log(temp_list);
    }
    result.push(temp_list);
  }
  return result;
};

console.log(generate(5));