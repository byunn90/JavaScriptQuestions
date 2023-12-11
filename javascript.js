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

function charCount(myChar, str) {
  let z = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (myChar === str[i]) {
      ++z;
    }
  }
  return z;
}
console.log(charCount("a", "edabit"));
// Answer 1 ⬆
console.log("___");
console.log(charCount("c", "Chamber of secrets"));
// Answer 1 ⬆
console.log("___");
console.log(charCount("b", "big fat bubble"));
console.log("___");
// Answer 4 ⬆
