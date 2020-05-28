const data = require('./data');

/**
 * 冒泡排序
 *
 * @param {Array} arr
 *
 */
function bubbleSort(list) {
  const arr = JSON.parse(JSON.stringify(list));
  const len = arr.length;
  let k = len - 1;
  let last_index = 0; // 最后一次交换的位置
  let temp;
  for (let i = 0; i < len - 1; i++) {
    let is_change = false;// 是否有交换
    for (let j = 0; j < k; j++) {
      if (arr[j] > arr[j + 1]) {
        is_change = true;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        last_index = j;
      }
    }
    k = last_index;
    // 已经排好序了
    if (!is_change) break;
  }
  return arr;
}


console.log(data);
console.log('---------------------');
console.log(bubbleSort(data));


