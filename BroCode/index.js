const date = new Date();
const yr = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

console.log(yr);
console.log(month);
console.log(day);
console.log();
console.log();
console.log();

// const numbers = [23, 3,3, 4, 45, 56, 6, 78];

// numbers.sort((a, b) => b - a);
// console.log(numbers);

// const fruits = [
// 	{ name: "apple", color: "red", calories: 56 },
// 	{ name: "mango", color: "green", calories: 67 },
// 	{ name: "grapes", color: "purple", calories: 45 },
// ];

// fruits.forEach((fruit) => console.log(fruit.name));
// const fruitsNames = fruits.map((fruit) => fruit.name);
// console.log(fruitsNames);

// class Rectangle {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 	}
// 	set width(newWidth) {
// 		if (newWidth > 0) {
// 			this._width = newWidth;
// 		} else {
// 			console.error("Width must be a posotive number");
// 		}
// 	}
// 	set height(newHeight) {
// 		if (newHeight > 0) {
// 			this._height = newHeight;
// 		} else {
// 			console.error("Height must be a positive number");
// 		}
// 	}
// 	get width() {
// 		return `${this._width.toFixed(1)}cm`;
// 	}
// 	get height() {
// 		return `${this._height.toFixed(1)}cm`;
// 	}
// 	get area() {
// 		return `${(this._width * this._height).toFixed(1)}cm^2`;
// 	}
// }

// const rectange = new Rectangle(5, 7);
// console.log(rectange.width);
// console.log(rectange.height);
// console.log(rectange.area);

// class Product {
// 	constructor(name, price) {
// 		this.name = name;
// 		this.price = price;
// 	}
// 	displayProduct() {
// 		console.log(`Product: ${this.name}`);
// 		console.log(`Price: $${this.price}`);
// 	}
// 	priceWithTax() {
// 		return this.price + this.price * salesTax;
// 	}
// }

// const product1 = new Product("T-Shirt", 100);
// product1.displayProduct();

// const salesTax = 0.05;
// total = product1.priceWithTax();
// console.log(total);
