// setTimeout(() => {
//   console.log("Sasayaw sa kulog at ulan");
// }, 1000);

// setTimeout(() => {
//   console.log("iikutin ang tala at buwan");
// }, 3000);

// setTimeout(() => {
//   console.log("habang tayo ay naliligaw");
// }, 6500);

// setTimeout(() => {
//   console.log("pakinggan ang puso wag ng bibitaw");
// }, 10000);
// console.log(`Hi, Mom!`);

//Reverse a String

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("parameters"));

//reverse string one liner

// function reverseString(str) {
//   var reversedString = ""; // Initialize an empty string to store the reversed result

//   for (var i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i]; // Iterate through the characters of the input string in reverse order and append each character to the reversedString
//   }

//   return reversedString; // Return the reversed string
// }

// console.log(reverseString("hi mom"));

// const reverseString = (str) => {
//   let string1 = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     string1 += str[i];
//   }

//   return string1;
// };

// console.log(reverseString("himom"));

//FACTORIALIZE
//factorial means the product of an integer and all the integers below it
//e.g. 4 = 4 x 3 x 2 x 1

// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(factorial(5)); //120

//PALINDROME CHECK
//check is string is palindrome or not - spelled forward backward is the same

// function palindromeCheck(str) {
//   const regex = /[\W_0-9]/g; //regex special characters and ignores numbers
//   const smallStr = str.toLowerCase().replace(regex, ""); //tolowercase and to replace regex wiht nothng

//   let reversedString = smallStr.split("").reverse().join("");
//   //find out how to reverse the string
//   if (reversedString === smallStr) {
//     return true; //and then return true if it matches the string - no need for else coz program will stop
//   }
//   return false; //otherwise return false
// }

// console.log(palindromeCheck("rac000*&^&%ec3242ar!%$%^")); //true

//FIND THE LONGEST WORD IN A STRING
//return the length of the longest word
// function findLongestWord(sentence) {
//   let words = sentence.split(" ");
//   let longestWord = "";
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(
//   findLongestWord("the quickkkkk brown fox jump over the the lazy dog")
// );

// const findLongestWordFunc = (str) => {
//   let string = str.split(" ");
//   let longestWord = "";
//   for (let word of string) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord.length;
// };

// //this function finds the longest word in a given string by splitting the string into words, iterating through the words, and keeping track of the longest word encountered. The result returned is the length of the longest word.

// console.log(
//   findLongestWordFunc("Hello its me ive been wondering lalala Im adele")
// );
//wondering - 9 letters

// function longSort(word) {
//   const splittedWord = word.split(" ").sort((a, b) => b.length - a.length);
//   return splittedWord[0];
// }

// // //sorts in descending order = > and then we just get the 1st word since its the longest word
// // //from the sort method we got

// console.log(longSort("Hello its me hi im the problem its me"));

// function titleCase(string) {
//   const words = string.split(" ");

//   let toCapitalize = "";
//   for (let word of words) {
//     toCapitalize += word[0].toUpperCase() + word.slice(1) + " ";
//   }

//   return toCapitalize;
// }

// console.log(titleCase("hi mom hehehehehe love you"));

//can also use dot map, for every word,  return word[0].toUpperCase() + word.slice(1) + " ";

//https://www.youtube.com/watch?v=o-SoVGzGCcQ&list=PLkBfv4fGBau-q9tGBUgVoGClRsSBiiZm8&index=6

//LARGEST/MAX NUMBER IN AN ARRAY

// function returnLargestNumber(numbersArray) {
//   let maxNumber = [];

//   for (let i = 0; i < numbersArray.length; i++) {
//     let tempMax = numbersArray[i][0];
//     for (let j = 0; j < numbersArray[i].length; j++) {
//       let currentElement = numbersArray[i][j];

//       if (currentElement >= tempMax) {
//         tempMax = currentElement;
//       }
//     }
//     maxNumber.push(tempMax);
//   }
//   return maxNumber;
// }

// const largestNumbers = returnLargestNumber([
//   [5, 20, 44, 76],
//   [5, 10, 15, 20],
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
// ]);

// console.log(largestNumbers); //76 20 4 8

// function endsWith(string, target) {
//   if (string.toLowerCase().endsWith(target.toLowerCase())) {
//     return true;
//   }
//   return false;
// }

// const doesEndWithTarget = endsWith("HellO", "o");
// console.log(doesEndWithTarget); //logs a Boolean

// console.log("Heyoworld".substring(0, 3)); //return from 0 to 2, the 3 not included

//repeat a string
// function repeatString(string, num) {
//   if (num < 0) return "";
//   return string.repeat(num);
// }

// const repeatedString = repeatString("hello", 5);
// console.log(repeatedString);

// function repeatString(string, num) {
//   let finalString = "";

//   if (num < 0) return "";

//   for (let i = 0; i < num; i++) {
//     finalString += string;
//   }
//   return finalString;
// }

// const repeatedString = repeatString("hello", 5);
// console.log(repeatedString); //hellohellohellohellohello

//truncate a string

// function truncate(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   }

//   return str;
// }

// const truncatedString = truncate("hellowworld, hello madlang people", 6);

// console.log(truncatedString);

//slasher
// function slasher(arr, howMany) {
//   arr.splice(0, howMany);
//   return arr;
// }

//SLASHER

// function slasher(arr, howMany) {
//   const array = arr.slice(0, howMany);
//   return array;
// }

// //slice is slicing and returning that part
// //splice is splicing and letting that part stay

// console.log(slasher([1, 2, 3], 2));
//3 for splice - splice is kung ano matira, ung ang irereturn
//1, 2 for slice - slice is kung ano kuhanin, ung ang irereturn

//2 string, IF ALL the string included- boolean

// function mutation(arr) {
//   const firstWord = arr[0].toLowerCase();
//   const secondWord = arr[1].toLowerCase();

//   for (let i = 0; i < secondWord.length; i++) {
//     if (firstWord.indexOf(secondWord[i]) === -1) return false;
//   }

//   return true;
// }

// const isMutated = mutation(["Hello", "hey"]);
// console.log(isMutated); //false

//sum of all numbers between them
//reduce max mix
//find the starting value , find the ending value
// function sumAll(arr) {
//   const start = Math.min(arr[0], arr[1]); //min
//   const end = Math.max(arr[0], arr[1]); //max
//   let total = 0;

//   for (let i = start; i <= end; i++) {
//     total += i;
//   }

//   return total;
// }

// console.log(sumAll([1, 4])); //10

//find total sales via reduce
// const sales = [5, 6, 7, 8];

// const totalSales = sales.reduce((acc, values) => {
//   return acc + values;
// }, 0);

// console.log(totalSales); //26

//**************/
//CHUNKY MONKEY
//SLICE AND SPLICE, PUSH
//write a function that splits an array (first arg) into groups the length of size (second arg)
//and returns them 2 2 dimensional arrays

//for loops
//start of loop
//when to stop the loop
//what happens in the loop
//start, stop, do after each loop

//falsy bouncer //remove falsy values from the array

// function bounce(arr) {
//   const isTruthy = arr.filter((value) => {
//     return value;   //!value if i want the oppposite, only return falsy values
//   });

//   return isTruthy; //filter returns only truthy values!
// }

// const isTruthy = bounce([7, "ate", "", false, 9]);
// console.log(isTruthy);
//filter filters a condition that i want matched, and it will return it

//chunky

// function chunky(arr, size) {
//   let groups = [];

//   while (arr.length > 0) {
//     groups.push(arr.slice(0, size)); //adding the slice every loop
//     arr = arr.slice(2); //removing the last 2 every loop
//   }

//   return groups;
// }

// console.log(chunky(["a", "b", "c", "d"], 2));

//seek and destroy
//is optional args are in the array, remove them and return the remaining
// //review this part esp
// function destroyer(arr) {
//   let args = Array.from(arguments);
//   args.splice(0, 1);
//   let targets = args;
//   let result = [];

//   for (let num of arr) {
//     if (targets.indexOf(num) === -1) {
//       result.push(num);
//     }
//   }

//   //filter method
//   //   return arr.fiter((num) => {
//   //     return targets.indexOf(num) === -1;
//   //   });

//   return result;
// }

// const destroyed = destroyer([1, 2, 3, 1, 2, 3], 2, 3); //return 1
// console.log(destroyed);

