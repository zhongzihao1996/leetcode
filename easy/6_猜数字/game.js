/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
  let count = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      count++;
    }
  }
  return count;
};

console.log(game([1, 2, 3], [1, 2, 3]));
