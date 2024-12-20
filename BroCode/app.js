const numbers = [1, 2, 3, 4, 5, 6];
const squared = numbers.map((element) => Math.pow(element, 3));
const total = numbers.reduce((prev, next) => prev + next);
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(squared);
console.log(evenNums);
console.log(total);

// //Date formating
// const date = ["12-2-2012", "3-5-2020", "21-9-1999"];
// const formatedDate = date.map(formatDate);
// console.log(formatedDate);

// function formatDate(element, index, array) {
// 	const parts = element.split("-");
// 	return `${parts[2]}/${parts[0]}/${parts[1]}`;
// }
// let fruits = ["Mango", "apple", "orange", "coconut", "avocado"];
// fruits.forEach(firstCapitalise);
// fruits.forEach(display);

// function upperCase(element, index, array) {
// 	array[index] = element.toUpperCase();
// }
// function lowerCase(element, index, array) {
// 	array[index] = element.toLowerCase();
// }
// function firstCapitalise(element, index, array) {
// 	array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function display(element) {
// 	console.log(element);
// }

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(square);
// numbers.forEach(display);

// function doubling(element, index, array) {
// 	array[index] = element * 2;
// }
// function square(element, index, array) {
// 	array[index] = Math.pow(element, 2);
// }

// function trippling(element, index, array) {
// 	array[index] = element * 3;
// }
// function display(element) {
// 	console.log(element);
// }

// sum(displayResult, 12, 95);

// function sum(callback, x, y) {
// 	let result = x + y;
// 	callback(result);
// }
// function displayResult(result) {
// 	document.getElementById("hd1").textContent = result;
// }
