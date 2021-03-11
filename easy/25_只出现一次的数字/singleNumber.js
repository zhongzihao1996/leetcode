/**
 * @param {number[]} nums
 * @return {number}
 */
// 利用异或
// 相同的数异或为0: n ^ n => 0
// 任何数于0异或为任何数 0 ^ n => n
// 交换律：a ^ b ^ c  <=> a ^ c ^ b
var singleNumber = function (nums) {
  if (nums.length <= 0) return 0;
  for (let i = 1; i < nums.length; i++) {
    nums[0] = nums[0] ^ nums[i];
  }
  return nums[0];
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
