const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", (event) => {
	myBox.style.backgroundColor = "tomato";
	myBox.textContent = "Clicked🤯";
});
myButton.addEventListener("mouseover", (event) => {
	myBox.style.backgroundColor = "lightblue";
	myBox.textContent = "Click me❁";
});
myButton.addEventListener("mouseout", (event) => {
	myBox.style.backgroundColor = "rgba(64, 8, 116, 0.696)";
	myBox.textContent = "Click me⚒️";
});
