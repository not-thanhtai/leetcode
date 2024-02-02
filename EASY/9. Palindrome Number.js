"use strict";
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverseNumber = 0;
  let t = x;
  while (t > 0) {
    let digit = t % 10;
    reverseNumber = reverseNumber * 10 + digit;
    t = ~~(t / 10);
  }
  if (reverseNumber === x) return true;
  return false;
};
