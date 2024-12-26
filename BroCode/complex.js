function outer() {
	let msg = "Hello devs";
	function inner() {
		console.log(msg);
	}
	inner();
}
outer();
