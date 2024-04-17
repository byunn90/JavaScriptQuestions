// Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// const { errorMonitor } = require("mysql2/typings/mysql/lib/Connection");

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
// function fizzBuzz(buzz) {
//   for (let index = 0; index < buzz.length; index++) {
//     const element = buzz[index];
//     if (element % 3 === 0 && element % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (element % 3 === 0) {
//       console.log("Fizz");
//     } else if (element % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(element);
//     }
//   }
// }

// fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16]);
// Ones, Threes and Nines (Version #1)
// Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.

// Examples
// let n1 = new OnesThreesNines(5)
// n1.nines ➞ 0

// n1.ones ➞ 5

// n1.threes ➞ 1
// Notes.
// This was originally a Python problem over here.
// See another Python version of this series.
// I'd suggest using getters and setters for this, but you're welcome to use any method you choose!
// Your OnesThreesNines class here!
// class OneThreeNines {
//   constructor(number) {
//     this.number = number;
//   }
//   get ones() {
//     return Math.floor(this.number / 1);
//   }
//   get threes() {
//     return Math.floor(this.number / 3);
//   }
//   get nines() {
//     return Math.floor(this.number / 9);
//   }
// }

// let n1 = new OneThreeNines(5);
// console.log(n1.ones); // Output: 5
// console.log(n1.threes); // Output: 1
// console.log(n1.nines); // Output: 0
// Name Classes
// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

// An attribute called fullname which returns the first and last names.
// An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.

// Examples
// a1 = new Name("john", "SMITH")
// a1.fname ➞ "John"

// a1.lname ➞ "Smith"

// a1.fullname ➞ "John Smith"

// a1.initials ➞ "J.S"
// Notes
// Make sure only the first letter of each name is capitalised.
// Check the Resources tab for some helpful tutorials on JavaScript classes.
// class Name {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fname() {
//     return (
//       this.firstName.charAt(0).toUpperCase() +
//       this.firstName.slice(1).toLowerCase()
//     );
//   }

//   get lname() {
//     return (
//       this.lastName.charAt(0).toUpperCase() +
//       this.lastName.slice(1).toLowerCase()
//     );
//   }

//   get fullName() {
//     return this.fname + " " + this.lname;
//   }

//   get initials() {
//     return (
//       this.firstName.charAt(0).toUpperCase() +
//       "." +
//       this.lastName.charAt(0).toUpperCase()
//     );
//   }
// }

// // Creating an instance of Name class
// let a1 = new Name("Kayhan", "Mamak");

// console.log(a1.fname); // Output: "Kayhan"
// console.log(a1.lname); // Output: "Mamak"
// console.log(a1.fullName); // Output: "Kayhan Mamak"
// console.log(a1.initials); // Output: "K.M"
// Question tommorrow Game
// PvP Battle: Alice vs Bob
// Having gotten rather sick of always being paired together in sciency literature, Alice and Bob have decided to finally settle their differences with a magical duel. They'll each learn some skills and then battle it out.

// Your Goal
// Your job is to write the class Player which will handle all the combat mechanics.

// Properties
// Let's look at the Player class's properties first. You'll need:

// A private health variable hp. Make sure it's private!
// A private maxHealth variable maxHp. Again, make sure it's private.
// A private energy variable en. Again, make sure it's private.
// A private maxEnergy variable maxEn. You know the drill by now.
// Getters and setters for health and energy:
// These should be named hp and en, respectively.
// They should be "capped". That is, you cannot have less than 0 health or energy, and your health and/or energy cannot be greater than their respective "max" values.
// An armor value. This is public.
// A name. This is also public.
// A getter for health percent, called hpPerc. Please return this value rounded to two decimal places.
// Now that that's out of the way, let's look at our single method (other than the aforementioned getters and setters):

// learnSkill() Method
// Your class must implement a single method called learnSkill.

// Basics/Functionality
// This method takes two parameters: a skill name (e.g., "fireball"), and an object containing skill statistics (more on that below!).

// Most importantly, after adding a skill:

// alice.learnSkill("fireball",{ //stats (see below)})
// you should then be able to call that skill as you'd normally call a method on your Player instance, with the target passed as a parameter:

// alice.fireball(bob);
// where the name of the method is merely the skill name passed in. Keep in mind that some skills may have two-part names, so you'll need to factor that in when creating your method.

// In general, using the skill should return a string describing what happened, as well as changing the relevant numbers on both the target and "caster".

// stats Object
// Your stats object has the following properties:

// {
//     damage: the raw damage done (assuming 0 effective armor),
//     description: the description of the attack (for humans to read),
//     penetration: Armor penetration amount (see "Armor" below),
//     cost: Cost, in energy points,
//     heal: Optional heal value (some skills heal the caster on cast!)
// }
// Logic
// Armor: Your learnSkill method will start out by subtracting an armor penetration stat from the target's armor value to get an "effective armor" value. That is, if Alice attacks Bob with a skill with 5 armor penetration, and Bob's armor is 50, then Bob's effective armor for this attack is 50-5 = 45.

// Energy: If the skill costs more energy than the character currently has, return (player name) attempted to use (skill name), but didn't have enough energy!. Otherwise, subtract the energy cost from the character's energy, and continue.

// Damage: Damage here is pretty easy. Consider that the minimum armor value is 0, the maximum is 100, and each percent effective armor decreases damage by one percent. An example:

// Alice attacks Bob for 50 damage. Bob's effective armor rating is 25.
// Alice does 50*((100-25)/100) = 37.5 damage.
// Attack String: You'll need to return a string describing what happened. The first part of the returned string should describe the attack itself, and should look like this: (attacking player name) used skill (skill name), (skill description), against (target name), doing (calculated damage) damage!. For the damage calculation, please round your value to two decimal places.

// Next, if the skill healed, append (attacking player name) healed for (heal amount) health..

// Finally, if the target player died, append (target name) died.. Otherwise, append (target name is at (targ hpPerc) % health.

// Return this string, and don't forget to actually apply the damage/health changes!

// Example
// const alice = new Player("Alice", 110, 50, 10)
// const bob = new Player("Bob", 100, 60, 20)

// alice.learnSkill("fireball", {
//     damage: 23,
//     penetration: 1.2,
//     heal: 5,
//     cost: 15,
//     desc: "a firey magical attack"
// })

// console.log(alice.fireball(bob))
// // Alice used fireball, a firey magical attack, against Bob, doing
// // 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

// bob.learnSkill("superbeam", {
//   damage:200,
//   penetration:50,
//   heal:50,
//   cost:75,
//   desc: "an overpowered attack, pls nerf"
// })

// console.log(bob.superbeam(alice))
// // Bob attempted to use superbeam, but didn't have enough energy!
// Notes
// In many fighting games, skills "pick" from a range of possible damage values. For the sake of simplicity (and testing!), assume that each skill does a specific, set damage number (factoring everything else in, of course).
// Don't worry about preventing a "dead" player from attacking.
// Pay very close attention to the exact format of the returned "attack" string! I'm comparing that directly with an expected result string, so even something like a missing space could ruin your answer.
// Your Player instances will be constructed as new Player(name,health,energy,armor)
// Array question 1

// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

// const person = {
//   firstName: "John",
//   lastName: "Mamak",
// };

// function toArray(obj) {
//   const propertyName = Object.keys(obj);
//   const entrieName = Object.entries(obj);
//   console.log(entrieName);
//   if (propertyName === "") {
//     return;
//   } else {
//     return propertyName;
//   }
// }
// const result = toArray(person);
// console.log(result);
//////
// Array question 2
// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// Examples
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
// Notes
// N/A

// console.log(object1.name);
// class Myobject1 {
//   constructor(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
//   }
// }
// function myArrayInput(object) {
//   for (const [, value] of Object.entries(object)) {
//     console.log(value);
//   }
// }
// const a1 = new Myobject1("Kayhan", "Mamak");
// console.log(a1);
// myArrayInput(a1);
// Q3

// Fix the Error: Flattening an Array
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.concat(arr[i]);
//   }
//   return arr2;
// }
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// Examples
// flatten([[1, 2], [3, 4]]) ➞ []
// // Expected: [1, 2, 3, 4]

// flatten([["a", "b"], ["c", "d"]]) ➞ []
// // Expected: ["a", "b", "c", "d"]

// flatten([[true, false], [false, false]]) ➞ []
// // Expected: [true, false, false, false]
// Fix this incorrect code so that all tests pass!
// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.concat(arr[i]);
//   }
//   return arr2;
// }
// PvP Battle: Alice vs Bob
// Having gotten rather sick of always being paired together in sciency literature, Alice and Bob have decided to finally settle their differences with a magical duel. They'll each learn some skills and then battle it out.

// Your Goal
// Your job is to write the class Player which will handle all the combat mechanics.

// Properties
// Let's look at the Player class's properties first. You'll need:

// A private health variable hp. Make sure it's private!
// A private maxHealth variable maxHp. Again, make sure it's private.
// A private energy variable en. Again, make sure it's private.
// A private maxEnergy variable maxEn. You know the drill by now.
// Getters and setters for health and energy:
// These should be named hp and en, respectively.
// They should be "capped". That is, you cannot have less than 0 health or energy, and your health and/or energy cannot be greater than their respective "max" values.
// An armor value. This is public.
// A name. This is also public.
// A getter for health percent, called hpPerc. Please return this value rounded to two decimal places.
// Now that that's out of the way, let's look at our single method (other than the aforementioned getters and setters):

// learnSkill() Method
// Your class must implement a single method called learnSkill.

// Basics/Functionality
// This method takes two parameters: a skill name (e.g., "fireball"), and an object containing skill statistics (more on that below!).

// Most importantly, after adding a skill:

// alice.learnSkill("fireball",{ //stats (see below)})
// you should then be able to call that skill as you'd normally call a method on your Player instance, with the target passed as a parameter:

// alice.fireball(bob);
// where the name of the method is merely the skill name passed in. Keep in mind that some skills may have two-part names, so you'll need to factor that in when creating your method.

// In general, using the skill should return a string describing what happened, as well as changing the relevant numbers on both the target and "caster".

// stats Object
// Your stats object has the following properties:

// {
//     damage: the raw damage done (assuming 0 effective armor),
//     description: the description of the attack (for humans to read),
//     penetration: Armor penetration amount (see "Armor" below),
//     cost: Cost, in energy points,
//     heal: Optional heal value (some skills heal the caster on cast!)
// }
// Logic
// Armor: Your learnSkill method will start out by subtracting an armor penetration stat from the target's armor value to get an "effective armor" value. That is, if Alice attacks Bob with a skill with 5 armor penetration, and Bob's armor is 50, then Bob's effective armor for this attack is 50-5 = 45.

// Energy: If the skill costs more energy than the character currently has, return (player name) attempted to use (skill name), but didn't have enough energy!. Otherwise, subtract the energy cost from the character's energy, and continue.

// Damage: Damage here is pretty easy. Consider that the minimum armor value is 0, the maximum is 100, and each percent effective armor decreases damage by one percent. An example:

// Alice attacks Bob for 50 damage. Bob's effective armor rating is 25.
// Alice does 50*((100-25)/100) = 37.5 damage.
// Attack String: You'll need to return a string describing what happened. The first part of the returned string should describe the attack itself, and should look like this: (attacking player name) used skill (skill name), (skill description), against (target name), doing (calculated damage) damage!. For the damage calculation, please round your value to two decimal places.

// Next, if the skill healed, append (attacking player name) healed for (heal amount) health..

// Finally, if the target player died, append (target name) died.. Otherwise, append (target name is at (targ hpPerc) % health.

// Return this string, and don't forget to actually apply the damage/health changes!

// Example
// const alice = new Player("Alice", 110, 50, 10)
// const bob = new Player("Bob", 100, 60, 20)

// alice.learnSkill("fireball", {
//     damage: 23,
//     penetration: 1.2,
//     heal: 5,
//     cost: 15,
//     desc: "a firey magical attack"
// })

// console.log(alice.fireball(bob))
// // Alice used fireball, a firey magical attack, against Bob, doing
// // 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

// bob.learnSkill("superbeam", {
//   damage:200,
//   penetration:50,
//   heal:50,
//   cost:75,
//   desc: "an overpowered attack, pls nerf"
// })

// console.log(bob.superbeam(alice))
// // Bob attempted to use superbeam, but didn't have enough energy!
// Notes
// In many fighting games, skills "pick" from a range of possible damage values. For the sake of simplicity (and testing!), assume that each skill does a specific, set damage number (factoring everything else in, of course).
// Don't worry about preventing a "dead" player from attacking.
// Pay very close attention to the exact format of the returned "attack" string! I'm comparing that directly with an expected result string, so even something like a missing space could ruin your answer.
// Your Player instances will be constructed as new Player(name,health,energy,armor)

// class Player {
//   constructor() {}
// }

// q1
// Running Athlete 🏃
// No description.
// Guess the code from test cases.
// Examples
// runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_") ➞ "_|_|_"

// runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_") ➞ "_|_/_"

// runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_") ➞ "x|x|x"

// runningAthlete(["run", "run", "run", "run", "run"], "_|_|_") ➞ "_/_/_"
// Notes
// N/A
// function runningAthlete(act, txt) {}
// Question 2
// Crowded Carriage Capacity
// A train has a maximum capacity of n passengers overall, which means each carriage's capacity will share an equal proportion of the maximum capacity.

// Create a function which returns the index of the first carriage which holds 50% or less of its maximum capacity. If no such carriage exists, return -1.

// Worked Example
// findASeat(200, [35, 23, 18, 10, 40]) ➞ 2

// // There are 5 carriages which each have a maximum capacity of 40 (200 / 5 = 40).
// // Index 0's carriage is too full (35 is 87.5% of the maximum).
// // Index 1's carriage is too full (23 is 57.5% of the maximum).
// // Index 2's carriage is good enough (18 is 45% of the maximum).
// // Return 2.
// Examples
// findASeat(20, [3, 5, 4, 2]) ➞ 3

// findASeat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60]) ➞ 0

// findASeat(200, [35, 23, 40, 21, 38]) ➞ -1
// Notes
// If a train can hold 200 passengers, and has 5 carriages, then that means each carriage can hold a maximum of 40 passengers each.
// n = number people
// arr = number of carriages
// find the maximum number for each carriage
// function findASeat(n, arr) {
//   const fiftyPercentage = (n * 50) / 100;

//   console.log(fiftyPercentage);
//   const maximumCar = n / arr.length;
//   console.log(`Maximum capacity per carriage: ${Math.round(maximumCar)}`);
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     const amountP = (element / fiftyPercentage) * 100;
//     console.log(`Carriage ${index}: ${Math.round(amountP)}% full`);
//     if (element <= fiftyPercentage) {
//       console.log(
//         `Carriage ${index} ${Math.round(element)} is 50% or less filled.`
//       );
//       return index;
//     }
//   }
//   return -1;
// }
// findASeat(200, [111, 40, 50, 111, 56]);

// All carriage numbers will be positive integers, which will be able to divide evenly.
// Remember to return -1 if no carriage is empty enough.
// function findASeat(n, arr) {}
// question 3
// Matrix Subtraction
// Two matrices must have an equal number of rows and columns to be subtracted. In which case, the subtracted of two matrices A and B will be a matrix which has the same number of rows and columns as A and B.

// The result of the subtraction of A and B, denoted A - B is computed by subtracting corresponding elements of A and B.

// Create a function that takes 2 x 2D array (matrix A, matrixB) as an argument and returns a 2D array (matrix C). C = A-B.

// Examples
// sub([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ], [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]) ➞ [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]
// Notes
// Treat strings of numbers as integers.
// function sub(matrixA, matrixB) {
//   // Check if matrices have the same dimensions
//   if (
//     matrixA.length !== matrixB.length ||
//     matrixA[0].length !== matrixB[0].length
//   ) {
//     return "Matrices are not of the same size. Subtraction cannot be performed.";
//   }

//   // Create an empty matrix to store the result
//   const resultMatrix = [];

//   // Iterate through rows
//   for (let i = 0; i < matrixA.length; i++) {
//     resultMatrix[i] = [];
//     // Iterate through columns
//     for (let j = 0; j < matrixA[0].length; j++) {
//       // Perform subtraction and store the result in the result matrix
//       resultMatrix[i][j] = matrixA[i][j] - matrixB[i][j];
//     }
//   }

//   return resultMatrix; // Return the resulting matrix C
// }

// // Test the function with example matrices
// const matrix1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const matrix2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(sub(matrix1, matrix2)); // Output the result of matrix subtraction
// sat question
// Running Athlete 🏃
// No description.
// Guess the code from test cases.
// Examples
// runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_") ➞ "_|_|_"

// runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_") ➞ "_|_/_"

// runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_") ➞ "x|x|x"

// runningAthlete(["run", "run", "run", "run", "run"], "_|_|_") ➞ "_/_/_"
// Notes
// N/A
// Special Arrays
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

// Examples
// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// // Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// // Index 3 has an even number 8.
// Notes
// N/A
// get odd numbers
//
// function isSpecialArray(arr) {
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     // Check if index is even
//     if (index % 2 === 0) {
//       // Check if the element at even index is not even
//       if (element % 2 !== 0) {
//         return false; // Return false if not special
//       }
//     } else {
//       // Check if the element at odd index is not odd
//       if (element % 2 === 0) {
//         return false; // Return false if not special
//       }
//     }
//   }

//   // If the loop completes without returning false, the array is special
//   return true;
// }

// console.log(isSpecialArray([1, 22, 3, 4, 5, 6, 7, 8])); // Out

// function repeatStr(n, s) {
//   let repeat = "";
//   for (let i = 0; i < n; i++) {
//     repeat += s;
//   }
//   return repeat;
// }
// console.log(repeatStr(6, "Hello"));

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

// function findDifference(a, b) {
//   const aa = a[0] * a[1] * a[2];
//   const bb = b[0] * b[1] * b[2];
//   return Math.abs(aa - bb);
// }

// console.log(findDifference([2, 2, 3], [5, 4, 1]));
// 1 We gotta times then all together each array to get the dimensions of cuboids

/// Rock beats scissors
// Paper beats rock
// scissors beats paper

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!";
//   } else if (p1 === "scissors" && p2 === "paper") {
//     return "Player 1 won!"; // Corrected message
//   } else if (p1 === "paper" && p2 === "rock") {
//     return "Player 1 won!"; // Corrected message
//   } else if (p1 === "rock" && p2 === "scissors") {
//     return "Player 1 won!"; // Corrected message, ensure consistency in casing and punctuation
//   } else {
//     return "Player 2 won!"; // Corrected message for Player 2 win
//   }
// };

// Code wars

// Question 1

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
// function getDivisorsCnt(n) {
//   let counter = 0;
//   for (let index = 1; index <= n; index++) {
//     if (n % index === 0) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(getDivisorsCnt(3));
// question 2

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// let isSquare = function (n) {
//   if (n < 0) {
//     return false;
//   }

//   let m = Math.sqrt(n);
//   return Number.isInteger(m);
// };
// isSquare(16);
// Question 3 BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
// Answers
// function bmi(weight, height) {
//   calculateBmi = weight / height ** 2;
//   console.log(calculateBmi);
//   if (calculateBmi <= 18.5) {
//     return "Underweight";
//   } else if (calculateBmi <= 25.0) {
//     return "Normal";
//   } else if (calculateBmi <= 30.0) {
//     return "OverWeight";
//   } else if (calculateBmi > 30) {
//     return "Obese";
//   }
// }
// console.log(bmi(98, 2));
// function bmi(weight, height) {
//   const calculateBmi = weight / height ** 2;
//   return calculateBmi <= 18.5
//     ? "Underweight"
//     : calculateBmi <= 25.0
//     ? "Normal"
//     : calculateBmi <= 30.0
//     ? "Overweight"
//     : "Obese";
// }

// Codewars Question 2
// DESCRIPTION:
//  You have a string. The string consists of words. Before words can be an exclamation mark !. Also some words are marked as one set with square brackets []. You task is to split the string into separate words and sets.
//  The set can't be contained in another set.

// Input:
//  String with words (separated by spaces), ! and [].

// Output:
//  Array with separated words and sets.

// Examples:

// ('Buy a !car [!red green !white] [cheap or !new]')  =>  ['Buy', 'a', '!car', '[!red green !white]', '[cheap or !new]']
// ('!Learning !javascript is [a joy]')                =>  ['!Learning', '!javascript', 'is', '[a joy]']
// ('[Cats and dogs] are !beautiful and [cute]')       =>  ['[Cats and dogs]', 'are', '!beautiful', 'and', '[cute]']
// function cleverSplit(s) {}
// Code wars

// Task
// Compute the Mobius function
// �
// (
// �
// )
// μ(n) for a given value of n.

// For a given n, the Mobius function is equal to:

// 0 if n is divisible by the square of any prime number. For example n = 4, 8, 9 are all divisible by the square of at least one prime number.

// 1 if n is not divisible by the square of any prime numbers, and has an even number of prime factors. For example n = 6, 10, 21 satisfy these conditions (e.g. 21 = 3 * 7 so it has an even number (2) of distinct prime factors and is not divisible by the square of any prime numbers).

// -1 otherwise. For example n = 3, 5, 7, 30.

// Input/Output
// You will be given an integer n; you must return an integer - the Mobius function of n.

// Performance requirements:

// 2 <= n <= 1e12
// Check for squares for numbers
// check for prime numbers from sqaures first
// function mobius(n) {
//   let count = 0;

//   for (let i = 2; i * i <= n; i++) {
//     if (n % (i * i) === 0) {
//       return 0;
//     }
//     if (n % i === 0) {
//       count++;
//       while (n % i === 0) {
//         n /= i;
//       }
//     }
//   }
//   if (n > 1) count++;

//   if (count % 2 === 0) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// console.log(mobius(15));
// Maximum subarray sum
// 378390889% of 6,22523,253 of 73,434knotman903 Issues Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// var maxSequence = function (arr) {
//   const newSum = [];
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//   }
// };

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// should be 6: [4, -1, 2, 1]
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// 1 Every first Letter of each word has to be at the end
// 2 Add Ay to the end of the word

// function pigIt(str) {
//   if (typeof str !== "string") {
//     return false;
//   }
//   const input = str.split(" ");
//   let transform = [];

//   for (let index = 0; index < input.length; index++) {
//     const element = input[index];

//     if (element.length > 0) {
//       const modifiedElement = element.substring(1) + element[0] + "ay";
//       transform.push(modifiedElement);
//     } else {
//       transform.push(element);
//     }
//   }

//   return transform.join(" ");
// }

// console.log(pigIt("Pig latin is cool"));
// console.log(pigIt("Hello world !"));

// // Code with regex
// function pigIt(str) {
//   const input = str.split(" ");
//   let transform = [];

//   for (let index = 0; index < input.length; index++) {
//     const element = input[index];

//     if (/^[a-zA-Z]+$/.test(element)) {
//       const modifiedElement = element.substring(1) + element[0] + "ay";
//       transform.push(modifiedElement);
//     } else {
//       transform.push(element);
//     }
//   }

//   return transform.join(" ");
// }

// console.log(pigIt("Pig latin is cool"));
// console.log(pigIt("Hello world !"));
// console.log(pigIt("O tempora o mores!"));
// Finished

// const myBtn = document.getElementById("checking-my-btn");
// myBtn.addEventListener("click", () => {
//   alert("Thanks for clicking me");
// });

// function checking(x) {
//   let letCheck = document.querySelector(".checking-api");
//   letCheck.innerHTML = `${x}`;
// }
// const fetchPromise =
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

// async function fetchData() {
//   try {
//     const response = await fetch(fetchPromise);
//     if (!response.ok) {
//       throw new error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log(data);
//     data.map((e) => console.log(e.name));
//   } catch (error) {
//     console.error(
//       "There has been a problem with your fetch operation: ",
//       error
//     );
//   }
// }
// console.log(fetchData());

// checking("Hi thanks acepting my Input");

// fetchPromise.then((response) => {
//   console.log(`Recieved response ${response}`);
// });

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

// async function myApi(url) {
//   const result = await fetch(url);
//   try {
//     let data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error", error);
//   }
// }
// myApi(fetchPromise).then((data) => console.log(data));
/*
Naughty or Nice
361886% of 261724 of 1,570thevjm
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}
Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"

*/

/*
DESCRIPTION:
This is a question from codingbat

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
n<=1000.

Check out my other kata!
*/

/*
function squareUp(n) {
  const squareCal = n * n;
  let emptyArray = new Array(squareCal).fill(0);
  for (let row = 1; row <= n; row++) {
    emptyArray[row] = row + 1;
    const reversed = emptyArray.reverse();
    const rowChanger = n * (row + 1);
    console.log(rowChanger);
    // emptyArray.reverse();
    console.log(reversed);
    // The inner loop needs to place the numbers in reverse order for each row.
    // This means starting from the end of the row.
    for (let col = n; col > 0; col--) {
      emptyArray[col] = col + 1;
      // emptyArray.reverse();
      // console.log(emptyArray);
      // Calculate the index in the flat array where the number should be placed.
      // This calculation will depend on both `row` and `col`.
      // Then, decide whether to place a number or leave it as 0, based on the pattern rules.
    }
  }
  // return [];
}
console.log(squareUp(4));
*/
// Question 1 today code wars
// Property
// Some rectangles have a recurring ratio of side lengths (the most famous example is A-series paper). For some of them, when removing a number of inner squares (each such square must have the side length of the smallest side of the rectangle), the ratio a / b is the same as b / c.

// Example (n = 1)

// Task
// Given the number of inner squares to remove from such rectangle n, what is value of the ratio of the longer side over the smaller side? Don't round your result.

// 1 ≤ n ≤ 1000
// function getRectangleRatio(n) {

//   return 1;
// }
// getRectangleRatio();
// come back to it later
/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
*/
// Go over this again Note
// function twoSum(numbers, target) {
//   let map = new Map();
//   console.log(map);
//   for (let i = 0; i < numbers.length; i++) {
//     let complement = target - numbers[i];
//     console.log(map);
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(numbers[i], i);
//   }
//   return [];
// }

// console.log(twoSum([1, 2, 3, 4], 3));
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// console.log(points("5:2, 2:2, 1:1, 3:3"));

// function points(games) {
//   const gameScores = games.split(", ");
//   let totalPoints = 0;

//   for (let game of gameScores) {
//     const scores = game.split(":");
//     const x = parseInt(scores[0], 10);
//     const y = parseInt(scores[1], 10);

//     if (x > y) {
//       totalPoints += 3;
//     } else if (x === y) {
//       totalPoints += 1;
//     }
//   }

//   return totalPoints;
// }
// console.log(points("5:2, 2:2, 1:1, 3:3"));

/*
Array.diff
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
// We have to loop and check both array if it has the same elements remove them
// function arrayDiff(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     for (let x = 0; x < b.length; x++) {
//       console.log(a[i] + " and " + b[x]);
//       if (a[i] === b[x]) {
//         a.splice(i, 1);
//         i--;
//       }
//     }
//   }
//   return a;
// }

// console.log(arrayDiff([1, 2, 2, 4], [1, 2, 5, 6]));
/*
Pete, the baker
Kyku Diffcultiy 5 
DESCRIPTION:
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
function cakes(recipe, available) {
  return;
}
*/

/*
6 kyu
Count characters in your string
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
// function count(string) {
//   let inTrapment = {};
//   for (const iterator of string) {
//     if (inTrapment[iterator]) {
//       inTrapment[iterator]++;
//     } else {
//       inTrapment[iterator] = 1;
//     }
//   }
//   return console.log(inTrapment);
// }
// count("aaaaaaaaahizz");
/*

Multiply the number
// Wake up exercise
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)

*/
// function multiply(number) {
//   const numberFive = 5;
//   const sign = Math.sign(number);
//   const digitChecker = Math.abs(number).toString().length;
//   return sign * Math.abs(number) * numberFive ** Number(digitChecker);
// }

// console.log(multiply(20));
/*
DESCRIPTION:
6 kyu
Tortoise racing
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1" for others.

Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
Note:
See other examples in "Your test cases".

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

** Hints for people who don't know how to convert to hours, minutes, seconds:

Tortoises don't care about fractions of seconds
Think of calculation by hand using only integers (in your code use or simulate integer division)
or Google: "convert decimal time to hours minutes seconds"

*/
// Two tortises Names A and B
// function race(v1, v2, g) {

//   if (v1 >= v2) {
//     return null;
//   }
// }
// console.log(race(720, 850, 70));

/*
DESCRIPTION:
A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity.

A natural number is thus prime if and only if it is 1-prime.

Examples of k-primes:
k = 2 -> 4, 6, 9, 10, 14, 15, 21, 22, …
k = 3 -> 8, 12, 18, 20, 27, 28, 30, …
k = 5 -> 32, 48, 72, 80, 108, 112, …
The k-prime numbers are not regularly spaced. For example: between 2 and 50 we have the following 2-primes:

[4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49]

The steps between two k-primes of this list are 2, 3, 1, 4, 1, 6, 1, 3, 1, 7, 1, 1, 3, 1, 7, 3.

Task
We will write a function kprimes_step(k, step, start, nd) with parameters:

k (integer > 0) which indicates the type of k-primes we are looking for,

step (integer > 0) which indicates the step we want to find between two k-primes,

start (integer >= 0) which gives the start of the search (start inclusive),

nd (integer >= start) which gives the end of the search (nd inclusive)

In the example above kprimes_step(2, 2, 0, 50) will return  [[4, 6], [33, 35]] which are the pairs of 2-primes between 2 and 50 with a 2 steps.

So this function should return an array of all the pairs (or tuples) of k-prime numbers spaced with a step of step between the limits start, nd. This array can be empty.

Note (Swift)
When there is no pair instead of returning an empty array, return nil

kprimes_step(5, 20, 0, 50) => nil
Examples:
kprimes_step(2, 2, 0, 50) => [[4, 6], [33, 35]]
kprimes_step(6, 14, 2113665, 2113889) => [[2113722, 2113736]])
kprimes_step(2, 10, 0, 50) => [[4, 14], [15, 25], [25, 35], [39, 49]]
kprimes_step(5, 20, 0, 50) => []
// Kyku 6
function kprimesStep(k, step, start, nd) {
  // your code
}
*/

// function maps(x) {
//   return x.map((element) => console.log(parseInt(element) * 2));
// }

// maps([1, 2, 3, 4, 5]);

/*
Task
Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

Some example:

bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
*/

// function bigToSmall(arr) {
//   const combineArray = arr.flat();
//   const sortedArray = combineArray.sort((a, b) => b - a).join(">");

//   return console.log(sortedArray);
// }

// bigToSmall([
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]);
// bigToSmall([
//   [1, 3, 5],
//   [2, 4, 6],
// ]);
// bigToSmall([[1, 1], [1], [1, 1]]);
/*
pyramid Array

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/
/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


*/
// for good ideas 'good' and bad ideas 'bad'.
// if there are one or two good ideas return 'Publish'
// if there are more than 2 return 'i smell a series'
// if there are no good ideas as is often the case return 'fail'
// function well(x) {
//   let good = 0;
//   let bad = 0;
//   for (let index = 0; index < x.length; index++) {
//     if (x[index] === "good") {
//       good++;
//     } else if (x[index]) {
//       bad++;
//     }
//   }
//   if (good === 0) {
//     return "Fail!";
//   } else if (bad === 1 || good === 2) {
//     return "Publish!";
//   } else if (good > 2) {
//     return "I smell a series!";
//   }
// }
// console.log(well(["bad", "bad", "bad"]));
// console.log(
//   well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
// );
// console.log(well(["good", "bad", "bad", "bad", "bad"]));
// Next question Range Extraction
/*
DESCRIPTION:
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

*/
// If the integers in the list are not consecutive, it means there is a gap or break between the current integer and the previous integer in the list.
/*
function solution(list) {
  let ranges = [];
  let start = list[0];
  let end = list[0];

  // Iterate through the array
  for (let index = 1; index < list.length; index++) {
    // Check if the current number is consecutive with the previous number
    if (list[index] - list[index - 1] === 1) {
      // Update the end of the current range to the current number
      end = list[index];
    } else {
      // If the numbers are not consecutive, handle the current range:
      // Check if the current range spans at least 3 numbers
      if (end - start >= 2) {
        // Add the range in the format "start-end" to the ranges array
        ranges.push(`${start}-${end}`);
      } else {
        // If the range does not span at least 3 numbers, add the individual numbers separately
        for (let i = start; i <= end; i++) {
          ranges.push(i);
        }
      }

      // Reset the start and end to the current number to start a new range
      start = list[index];
      end = list[index];
    }
  }

  // Handle the last range after the loop ends
  if (end - start >= 2) {
    ranges.push(`${start}-${end}`);
  } else {
    for (let i = start; i <= end; i++) {
      ranges.push(i);
    }
  }

  // Combine ranges array into a comma-separated string
  return ranges.join(",");
}

// Test the function with an example list
console.log(solution([1, 2, 3, 4, 5, 6])); // Should print "1-6"
*/
/*
Simple directions reversal

In this Kata, you will be given directions and your task will be to find your way back.

solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
*/

function solve(arr) {
  // Reverse the array
  const reversedArr = arr.reverse();

  // Adjust the directions
  const reversedArrAdjusted = reversedArr.map((direction) => {
    // Check if the direction starts with "Begin"
    if (direction.startsWith("Begin")) {
      // Modify "Begin" with the reversed road
      const roadName = direction.split(" ").slice(2).join(" ");
      return `Begin on Road ${roadName.split(" ")[1]}`;
    } else if (direction.startsWith("Right")) {
      // Replace "Right" with "Left"
      return direction.replace("Right", "Left");
    } else if (direction.startsWith("Left")) {
      // Replace "Left" with "Right"
      return direction.replace("Left", "Right");
    } else {
      // Return the direction as is
      return direction;
    }
  });

  // Return the adjusted array
  return reversedArrAdjusted;
}

// Example usage
console.log(
  solve([
    "Begin on Road A",
    "Right on Road B",
    "Right on Road C",
    "Left on Road D",
  ])
);

// O

// = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
// solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
/*

How Many Differences of Squares?
DESCRIPTION:
Some numbers can be expressed as a difference of two squares, for example, 20 = 62-42 and 21 = 52-22. Many numbers can be written this way, but not all.

Your Task
Complete the function that takes a positive integer n and returns the amount of numbers between 1 and n (inclusive) that can be represented as the difference of two perfect squares.

Note: Your code should be able to handle n values up to 45000

Examples
n = 4 ==> 3
n = 5 ==> 4
n = 10 ==> 7
n = 20 ==> 15
n = 6427 ==> 4820

*/
