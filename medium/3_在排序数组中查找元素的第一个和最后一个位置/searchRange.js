/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];
  let left = 0;
  let right = nums.length - 1;
  let start = 0;
  let end = 0;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      start = mid;
      end = mid;
      while (start > left && nums[start] === nums[start - 1]) start--;
      while (end < right && nums[end] === nums[end + 1]) end++;
      return [start, end];
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return [-1, -1];
};