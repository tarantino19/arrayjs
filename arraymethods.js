//for each - NUMBERS
// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// numbers.forEach((num) => (sum += num));

// console.log(sum); //15

// FOR EACH LETTERS
//how many times a letter appears in an array

// const letters = ["a", "a", "b", "c"];

// let count = {};

// letters.forEach((letter) => {
//   if (count[letter]) {
//     count[letter]++; //increment + 1
//   } else {
//     count[letter] = 1; // = 1
//   }
// });

// console.log(count);

//MAP

// const people = [
//   {
//     name: "Red",
//     age: 30,
//     job: "unemployed",
//   },
//   {
//     name: "Joe",
//     age: 31,
//     job: "professor",
//   },
// ];

// const names = people.map((person) => {
//   return `Hi, my name is ${person.name}`;
// });
// console.log(names);
//[ 'Hi, my name is Red', 'Hi, my name is Joe' ]

//FILTER

// const people = [
//   {
//     name: "Red",
//     age: 30,
//     job: "unemployed",
//   },
//   {
//     name: "Joe",
//     age: 31,
//     job: "professor",
//   },
//   {
//     name: "Len",
//     age: 17,
//     job: "student",
//   },
// ];

// const adultList = people.filter((person) => {
//   return person.age < 100;
// });

// console.log(adultList);

// const sales = [1, 2, 3, 4, 5];

// const totalSales = sales.reduce((acc, value) => {
//   return acc + value;
// }, 0);

// console.log(totalSales); //15

//slice, returns a shallow copy - it wont modified the original array

// const numbers = [1, 2, 3, 4, 5];

// const oneTwo = numbers.slice(0, 2);
// console.log(oneTwo); //returns 1 2

// const splicedNumbers = [1, 2, 3, 4, 5];

// splicedNumbers.splice(0, 4);

// console.log(splicedNumbers); //5

// function fizzBuzz(n) {
//   // Write your code here
//   for (let i = 0; i < n; i++) {
//     if (i % 3 === 0) console.log("Fizz");
//     if (i % 5 === 0) console.log("Buzz");
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else console.log(i);
//   }
// }

// fizzBuzz(15);

//concat, adding 2 different array
//does not change the original arrays

// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const c = a.concat(b);
// console.log(c); // 1-6
// c.push(4);
// console.log(c); //1-6 4
//push changes an array, adds to the last property

//FILL METHOD
//fill changes ALL the content

// const a = [1, 2, 3, 4, 5];

// // a.fill(9);
// // console.log(a); //all 9

// //but we can also specify the index that will be EXCLUDED
// a.fill(0, 2, 4); //what value, what index starts what index ends
// //the end index is not included
// console.log(a);

//INCLUDES returns a boolean value

// const names = ["Filomeno", "Ivan", "Gastro"].map((name) => name.toLowerCase());

// const isIncluded = names.includes("filomeno");

// console.log(isIncluded); //true

//JOIN joins the arrays into a string
//returns a new string

// const names = ["Filomeno", "Ivan", "Gastro"];

// const joinedNames = names.join(" and ");

// console.log(joinedNames); //Filomeno and Ivan and Gastro

//reverse changes the original array

// const a = [1, 2, 3, 4, 5];
// const reversed = a.reverse();

// console.log(a); //[ 5, 4, 3, 2, 1 ]

//sort

// const a = [1, 2, 3, 4, 5];
// a.sort((a, b) => b - a); //can ascend and can descend
// console.log(a);

//when sorting an array
// To avoid modifying the original array, you can make a copy of the array using the slice() method before sorting it.

//can also do spread operator

// const a = [1, 2, 3, 4, 5];
// const b = [...a, 10].sort((a, b) => b - a);

// console.log(a); //[ 1, 2, 3, 4, 5 ]
// console.log(b); //[ 10, 5, 4, 3, 2, 1 ]

//PUSH - adds the value to the end of the array

// const a = [1, 2, 3, 4, 5];

// const b = a.push(4);

// console.log(a);
// // [1, 2, 3, 4, 5, 4];
// console.log(b); //6

//this changes the original array
//better to concat

// const a = [1, 2, 3, 4, 5];
// const b = a.concat(4);
// console.log(a); //did not change in value
// console.log(b); //[ 1, 2, 3, 4, 5, 4 ]

//pop - remove last item - return remaining items, changes the original array
// const numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// console.log(numbers); //1234

//unshift - adds the value to the beginning of the array
//opposite of push - this changes the original array
// const numbers = [1, 2, 3, 4, 5];
// numbers.unshift(0);
// console.log(numbers); //[ 0, 1, 2, 3, 4, 5 ]

//shift - remove first item - return remaining items, changes the original array
// const numbers = [1, 2, 3, 4, 5];
// numbers.shift();
// console.log(numbers); //2345

//better than unshift?
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = [0, ...numbers];
// console.log(numbers); [ 1, 2, 3, 4, 5 ]
// console.log(newNumbers); [ 0, 1, 2, 3, 4, 5 ]

//array indexof lastindexof

//returns the first index in which first element can be found in the array

// const names = ["Filomeno", "Ivan", "Gastro"];
// const indexOf = names.indexOf("Ivan");
// console.log(indexOf); //1

//returns the last index in which first element can be found in the array

// const names = ["Filomeno", "Ivan", "Gastro", "Ivan"];
// const lastIndexOf = names.lastIndexOf("Ivan");
// console.log(lastIndexOf); //3 //last part where it appears

//every and some - returns a boolean
//every and some has a callback function

// const numbers = [1, 2, 3, 4, 5];
// //check if all numbers are positive
// const isPositive = numbers.every((num) => num > 0);

// console.log(isPositive); //true

// const objects = [
//   { id: 1, name: "Filomeno" },
//   { id: 2, name: "Ivan" },
//   { id: 3 },
// ];

// //does it all have a name property?
// const hasName1 = objects.every((obj) => obj.name);

// console.log(hasName1); //false

// const hasName2 = objects.some((obj) => obj.name);
// console.log(hasName2); //true

// //does this have EVERY property?
// //does this have SOME of the properties?

// const hasAllProperties = objects.every((obj) => obj.id && obj.name);
// console.log(hasAllProperties); //false

// const hasSomeProperties = objects.some((obj) => obj.id && obj.name);
// console.log(hasSomeProperties); //true

//FIND ARRAY METHOD
// const names = ["Filomeno", "Ivan", "Gastro", "Ivan"];
// //finds the first element that matches the condition in the callback
// //that returns a truthy value
// //(item, index, array)
// const Ivan = names.find((name) => name === "Ivan"); //Ivan
// console.log(Ivan); //Ivan

//indexOf - find the index instead of returning the value
//accepts a value that you want to find //string number
// const index = names.indexOf("Ivan");
// console.log(index); //1

// find index best for objects
//accepts a callback
// const objects = [
//   { id: 1, name: "Filomeno" },
//   { id: 2, name: "Ivan" },
//   { id: 3 },
// ];

// const index = objects.findIndex((obj) => obj.name === "Ivan" && obj.id === 2);
// console.log(index); // 1
//if it doesn't find it, it returns -1
//i can use this for conditionals, if it returns -1 and its a falsy value
//if its a falsy value, do something here

//FROM ARRAY
//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object
// const str = "1234567";
// const mapFn = (char) => Number(char); //+char works as well
// const res = Array.from(str, mapFn); // [ 1, 2, 3, 4, 5, 6, 7 ]
// //pass the string and the map function
// console.log(res);

// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = Array.from(numbers, (num) => num * 2);
// console.log(newNumbers); //array from creates a shallow copy

//SET
// const numbers = [1, 2, 3, 3, 3, 4, 5, 7];

// //how to remove duplicate values?
// const set = new Set(numbers);
// console.log(set); //Set { 1, 2, 3, 4, 5, 7 }
// const uniqueNumbers = [...set]; //[ 1, 2, 3, 4, 5, 7 ]
// console.log(uniqueNumbers);
// const uniqueArrays = Array.from(set);
// console.log(uniqueArrays); //[ 1, 2, 3, 4, 5, 7 ]

//remove duplicate?
//use array from or a spread operator inside an array

//isArray Method
//checks is the past value is an array
//returns a boolean

// const numbers = [1, 2, 3, 4, 5];
// console.log(Array.isArray(numbers)); //true
//why needed? well there are cases where we don't know
//if the given value is an array or not, it acts as a checker

//FLAT ARRAY METHOD

//creates a new array where all sub arrays gets concantenated

//flatarray
// const numbers = [1, [2, 3], [4, 5]];
// const res = numbers.flat();
// console.log(res); // [ 1, 2, 3, 4, 5 ]

//all the sub arrays becomes part of the new array
