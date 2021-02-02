/**
 * @param {number[]} nums
 * @return {number}
 */
const reduce = (arr) => {
  let count = -0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
};

var pivotIndex = function (nums) {
  const len = Math.floor(nums.length);
  console.log(len);
  for (let i = 0; i < len; i++) {
    const left_nums = nums.slice(0, i);
    const right_nums = nums.slice(i + 1);
    if (i === 0) {
      if (reduce(right_nums) === 0) {
        return i;
      }
    } else {
      if (reduce(left_nums) === reduce(right_nums)) {
        return i;
      }
    }
  }
  return -1;
};



console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));