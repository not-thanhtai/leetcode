/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const openBrackets = ["(", "[", "{"];
  const closeBrackets = [")", "]", "}"];

  for (let i = 0; i < s.length; i++) {
    const isOpenBrackets = ["(", "[", "{"].includes(s[i]);
    if (isOpenBrackets) {
      stack.push(s[i]);
    } else {
      const top = stack.pop();
      if (openBrackets.indexOf(top) !== closeBrackets.indexOf(s[i])) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
