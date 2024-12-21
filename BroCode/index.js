class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	displayProduct() {
		console.log(`Product: ${this.name}`);
		console.log(`Price: $${this.price}`);
	}
	priceWithTax() {
		return this.price + this.price * salesTax;
	}
}

const product1 = new Product("T-Shirt", 100);
product1.displayProduct();

const salesTax = 0.05;
total = product1.priceWithTax();
console.log(total);
