/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    var index = nums.indexOf(target - nums[i], i + 1);
    console.log(index);
    if (index !== -1) {
      return [i, index];
    }
  }
};