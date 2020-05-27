/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b); // 先排好序
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0, len = nums.length; i < len; i++) {
    let left = i + 1;
    let right = len - 1;
    // 直到左右两指针相遇
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) return sum; // 题目为有且仅有一种情况
      if (Math.abs(target - result) > Math.abs(target - sum)) {
        result = sum;
      }
      // 已经排好序的，若比目标值大，则移动右指针
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
