/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分法查找
var searchInsert = function (nums, target) {
  if (nums.length === 0) return 0;
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
      left = mid + 1;
    }
    if (target < nums[mid]) {
      right = mid - 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 2));
