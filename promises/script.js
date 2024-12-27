// Promise
// An object that mannages asynchronous operations

function walkDog() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let walking = true;
			if (walking) {
				resolve("You walked the dog🐕!");
			} else {
				reject("You didn't walked dog 👎");
			}
		}, 3000);
	});
}

function cleanKitchen() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let cleaned = true;
			if (cleaned) {
				resolve("You cleaned the Kitchen🔪!");
			} else {
				reject("You didn't clean the kitchen👎");
			}
		}, 25000);
	});
}
function takeOutTrash() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let trash = true;
			if (trash) {
				resolve("You took out the trash out!");
			}
            else{
                reject("Not took away👎")
            }
		}, 500);
	});
}
walkDog()
	.then((value) => {
		console.log(value);
		return cleanKitchen();
	})
	.then((value) => {
		console.log(value);
		return takeOutTrash();
	})
	.then((value) => {
		console.log(value);
		console.log("All chores completed");
	})
	.catch((error) => console.error(error));
