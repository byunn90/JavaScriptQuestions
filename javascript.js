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

function findIndex(arr, str) {
  // we wanna push the str into the array
  for (let i = 0; i < arr.length; i++) {
    console.log([i]);
    if (arr[i] === str) {
      return i;
    }
  }
  return "No Match has been found";
}
console.log(findIndex(["apple", "banana", "Kayhan", "Rahim"], "Rahim"));
console.log(findIndex(["apple", "banana", "Kayhan", "Rahim"], "asdasdsad"));
