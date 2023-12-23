/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const processedStr1 = Array.from(str1).map((letter) => { return letter.toLowerCase() }).sort().join("");
  const processedStr2 = Array.from(str2).map((letter) => {
    return letter.toLowerCase()
  }).sort().join("");
  console.log(processedStr1, processedStr2);
  return processedStr1 === processedStr2;
}

module.exports = isAnagram;
