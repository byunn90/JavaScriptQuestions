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

// function findLargestNums(...array) {
//   const maxNumbers = [];
//   for (let i = 0; i < array.length; i++) {
//     const maxInArray = Math.max(...array[i]);
//     maxNumbers.push(maxInArray);
//   }
//   return maxNumbers;
// }
// console.log(findLargestNums([1, 2, 3, 4, 5, 7], [100, 200, 300], [-1, -44]));
// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

// Examples
// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

// set([4, 4, 4, 4]) ➞ [4]

// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

// set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
// Notes
// For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
// See resources for a hint if you get stuck.
// Go over this Tommorrow
// function set(arr) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArray.includes(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// console.log(set([1, 1, 1, 2, 3, 4, 4, 5]));
// MED QUESTION Q1
// function arrayOfMultiples(num, length) {
//   const arra = [];
//   for (let i = num; arra.length < length; i += num) {
//     arra.push(i);
//     console.log(i);
//   }
//   return arra;
// }
// arrayOfMultiples(2, 10);
// MED QUESTION Q2
// Reverse Words in a String
// Given an input string, reverse the string word by word, the first word will be the last, and so on.

// Examples
// reverseWords(" the sky is blue") ➞ "blue is sky the"

// reverseWords("hello   world!  ") ➞ "world! hello"

// reverseWords("a good example") ➞ "example good a"
// Notes
// A word is defined as a sequence of non-space characters.
// The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Try to solve this in linear time.
// function reverseWords(string) {
//   const newWordsReverse = [];
//   for (let index = 0; index < string.length; index++) {
//     const element = string[index];
//     newWordsReverse.push(element);
//   }
//   newWordsReverse.reverse();
//   const reversedString = newWordsReverse.join(" "); // Join the reversed array with spaces
//   console.log(reversedString);
// }
// reverseWords(["Bird", "PIKACHU", "Parrot"]);
// MED QUESTION Q3
// Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
// Notes
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.
// Each array item is unique.
// Q
// Remove the Letters ABC
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

// Examples
// removeABC("This might be a bit hard") ➞ "This might e  it hrd"

// removeABC("hello world!") ➞ null

// removeABC("") ➞ null
// Notes
// If the given string does not contain "a", "b", or "c", return null.
// function removeABC(str) {
//   const modifiedStr = str.replace("a", " ").replace("b", " ").replace("c", " ");
//   for (let index = 0; index < modifiedStr.length; index++) {
//     const element = modifiedStr[index];
//     console.log(element);
//   }
//   if (
//     !modifiedStr.includes("a") &&
//     !modifiedStr.includes("b") &&
//     !modifiedStr.includes("c")
//   ) {
//     return null;
//   } else {
//     return modifiedStr;
//   }
// }
// removeABC("asdzxcvdfqweewqw");
// FizzBuzz
// Write a program that prints the numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz". The value of 'n' should be provided by the user or set within the code.
function fizzBuzz(buzz) {
  for (let index = 0; index < buzz.length; index++) {
    const element = buzz[index];
    if (element % 3 === 0 && element % 5 === 0) {
      console.log("FizzBuzz");
    } else if (element % 3 === 0) {
      console.log("Fizz");
    } else if (element % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(element);
    }
  }
}

fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16]);
