// Use concat() to join two arrays: arr1 = ["Cecile", "Lone"] and arr2 = ["Emil", "Tobias", "Linus"].
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const concatenatedArray = arr1.concat(arr2);
console.log(concatenatedArray);


// Use push() to add an element "Kiwi" to the array fruits = ["Banana", "Orange", "Apple", "Mango"].
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// Use unshift() to add two numbers 4 and 5 to the beginning of the array array1 = [1, 2, 3].
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);

// Use pop() to remove the last element from the fruits array.
fruits.pop();
console.log(fruits);

// Use shift() to remove the first element from the array array2 = [1, 2, 3].
let array2 = [1, 2, 3];
array2.shift();
console.log(array2);

// Use sort() to sort the fruits array alphabetically.
fruits.sort();
console.log(fruits);

// Use slice() to create a new array containing a portion of the fruits array.
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

// Use splice() to insert and remove elements in the months array.
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // Insert "Feb" at index 1
months.splice(4, 1, "May"); // Replace "June" with "May" at index 4
console.log(months);
