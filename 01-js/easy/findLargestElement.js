/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    const l = numbers.length;
    if(l === 0)
        return undefined;
    let ans = numbers[0];
    numbers.forEach((number) => {
        if(ans < number) {
            ans = number;
        }
    });
    return ans;
}

module.exports = findLargestElement;