/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const processedStr = Array.from(str).map((letter) => {
    return letter.toUpperCase()
  }).filter((letter) => {
    return letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 97;
  }).join("");
  const reversedStr = Array.from(processedStr).reverse().join("");
  return processedStr === reversedStr;
}

module.exports = isPalindrome;
