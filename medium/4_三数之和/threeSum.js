/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 难点是去重
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  let result = [];
  // 左右指针，
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) break; // 排好序后当前数最小，正数相加不可能为0
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // 这里的去重着实没看懂
        while (left < right && nums[left] == nums[left + 1]) left++; // 去重
        while (left < right && nums[right] == nums[left - 1]) right--; // 去重
        // 找到了，左右指针向中间靠拢
        left++;
        right--;
      }
      if (sum < 0) {
        left++;
      }
      if (sum > 0) {
        right--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
