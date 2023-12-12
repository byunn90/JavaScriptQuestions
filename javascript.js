// Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
// Notes
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.

// function findIndex(arr, str) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log([i]);
//     if (arr[i] === str) {
//       return i;
//     }
//   }
//   return "No Match has been found";
// }
// console.log(findIndex(["apple", "banana", "Kayhan", "Rahim"], "Rahim"));
// console.log(findIndex(["apple", "banana", "Kayhan", "Rahim"], "asdasdsad"));
// Second question
// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4
// Notes
// Your output must be case-sensitive (see second example).

// function charCount(myChar, str) {
//   let z = 0;
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//     if (myChar === str[i]) {
//       ++z;
//     }
//   }
//   return z;
// }
// console.log(charCount("a", "edabit"));
// // Answer 1 ⬆
// console.log("___");
// console.log(charCount("c", "Chamber of secrets"));
// // Answer 1 ⬆
// console.log("___");
// console.log(charCount("b", "big fat bubble"));
// console.log("___");
// Answer 4 ⬆
// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// The original order must be maintained.
// function filterArray(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(filterArray([1, 2, 3, "b", "a"]));
// console.log(filterArray([1, 5, 3, "adasdsadad", "a"]));

// Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// Examples
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

// findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
// Notes
// Watch out for negative integers (numbers).

function findLargestNums(...array) {
  const maxNumbers = [];
  for (let i = 0; i < array.length; i++) {
    const maxInArray = Math.max(...array[i]);
    maxNumbers.push(maxInArray);
  }
  return maxNumbers;
}
console.log(findLargestNums([1, 2, 3, 4, 5, 7], [100, 200, 300], [-1, -44]));
